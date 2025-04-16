const { errorHandler } = require("../helpers/error.handler");
const UsersInformationsModel = require("../models/users.informations.model");
const UsersModel = require('../models/user.model');
const mailService = require("../services/mail.service");
const jwtService = require("../services/jwt.service");
const uuid = require('uuid');
const config = require('config');

const addNewUser = async(req, res) => {
    try {
        const now = new Date();
        const newUser = await UsersModel.create({...req.body, created_at: now});
        res.status(201).send({message: "User created succesfully!", newUser});
    } catch (error) {
        errorHandler(error, res);
    }
}

const getAllUsers = async(req, res) => {
    try {
        const allUsers = await UsersModel.findAll();
        res.status(200).send({allUsers});
    } catch (error) {
        errorHandler(error, res)
    }
}

const getUserById = async(req, res) => {
    try {
        const id = req.params.id;
        const user = await UsersModel.findByPk(id);
        const userInfo = await UsersInformationsModel.findOne({where: {user_id: user.id}})
        res.status(200).send({user, userInfo});
    } catch (error) {
        errorHandler(error, res)
    }
}
const updateUserById = async(req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = await UsersInformationsModel.update({...req.body}, {where: {id: id}});
        res.status(200).send({message: "User updated succesfully!", updatedUser});
    } catch (error) {
        errorHandler(error, res);
    }
}

const deleteUserById = async(req, res) => {
    try {
        const id = req.params.id;
        await UsersInformationsModel.destroy({where: {id: id}});
        res.status(200).send({message: "User deleted succesfully"});
    } catch (error) {
        errorHandler(error, res)
    }
}

const registrUser = async(req, res) => {
    try{ 
        const {email} = req.body;
        const activation_link = uuid.v4();
        const now = new Date();
        await UsersModel.create({email, activation_link: activation_link, created_at: now});
        await mailService.sendActivationMail(
            email,
            activation_link
        );
        res.status(201).send({message: "Emailga activatsiya linki yuborildi. Tasdiqlang!"});
    } catch (error) {
        errorHandler(error, res);
    }
}

const activateUser = async (req, res) => {
    try {
        const user = await UsersModel.findOne({
            where: { activation_link: req.params.link },
        });
        if (!user) {
            return res.status(404).send({ message: "Foydalanuvchi topilmadi" });
        }
    
        const payload = {
            id: user.id,
            email: user.email,
            role: "user"
        };
    
        const tokens = jwtService.generateTokens(payload);
    
        user.is_active = true;
        user.refresh_token = tokens.refreshToken;
        await user.save();
    
        res.cookie("refreshToken", tokens.refreshToken, {
            httpOnly: true,
            maxAge: config.get("refresh_cookie_time"),
        });
    
        res.send({
            message: "Foydalanuvchi faollashtirildi",
            accessToken: tokens.accessToken,
        });
    } catch (error) {
        errorHandler(error, res);
    }
};

const loginUser = async (req, res) => {
    try {
        const {email} = req.body;
        const user = await UsersModel.findOne({where: {email: email}});
        const activation_link = uuid.v4();
        await mailService.sendActivationMail(
            email,
            activation_link
        );
        user.activation_link = activation_link;
        await user.save();
        res.status(201).send({message: "Emailga activatsiya linki yuborildi. Tasdiqlang!"});
    } catch (error) {
        errorHandler(error, res);
    }
};

const logOutUser = async(req, res)=> {
    try {
        const { refreshToken } = req.cookies;
        if (!refreshToken) {
            return res
                .status(400)
                .send({messege: "Cookieda refresh token topilmadi!"});
        }
        
        const user = await UsersModel.findOne({ where: { refresh_token: refreshToken } });
        
        if (!user) {
            return res
                .status(400)
                .send({messege: "Bunday tokenli foydalanuvchi topilmadi!"});
        }

        user.refresh_token = "";
        user.is_active = false;
        await user.save();

        res.clearCookie("refreshToken");
        res.send({messege: "User logged out succesfully", id: user.id})
    } catch (error) {
        errorHandler(error, res);
    }
}

const refreshTokenUser = async (req, res) => {
    try {
        const {refreshToken} = req.cookies;
        if (!refreshToken) {
            return res
                .status(400)
                .send({messege: "Cookieda refresh token topilmadi!"});
        }
        const decodedRefreshToken = await jwtService.verifyRefreshToken(refreshToken);
        const user = await UsersModel.findOne({ where: { refresh_token: refreshToken } });
        if (!user) {
            return res
                .status(400)
                .send({messege: "Bunday tokenli foydalanuvchi topilmadi!"});
        }

        const payload = {
            id: user.id,
            email: user.email,
            role: 'user'
        }

        const tokens = jwtService.generateTokens(payload)
        user.refresh_token = tokens.refreshToken;
        await user.save();

        res.cookie("refreshToken", tokens.refreshToken, {
            httpOnly: true,
            maxAge: config.get("refresh_cookie_time")
        });
        res.send({
            messege: "Tokenlar yangilandi!", 
            accessToken: tokens.accessToken
        });
    } catch (error) {
        errorHandler(error, res);
    }
}


module.exports = {
    addNewUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    registrUser,
    activateUser,
    logOutUser,
    loginUser,
    refreshTokenUser
}