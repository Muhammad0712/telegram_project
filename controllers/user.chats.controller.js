const { errorHandler } = require("../helpers/error.handler");
const UserChatsModel = require('../models/chats.model');


const addNewUserChat = async(req, res) => {
    try {
        const newUserChat = await UserChatsModel.create({...req.body});
        res.status(201).send({message: "User chat created succesfully!", newUserChat});
    } catch (error) {
        errorHandler(error, res);
    }
}

const getAllUserChats = async(req, res) => {
    try {
        const allUserChats = await UserChatsModel.findAll();
        res.status(200).send({allUserChats});
    } catch (error) {
        errorHandler(error, res)
    }
}

const getUserChatById = async(req, res) => {
    try {
        const id = req.params.id;
        const userChat = await UserChatsModel.findByPk(id);
        res.status(200).send({userChat});
    } catch (error) {
        errorHandler(error, res)
    }
}
const updateUserChatById = async(req, res) => {
    try {
        const id = req.params.id;
        const updatedUserChat = await UserChatsModel.update({...req.body}, {where: {id: id}});
        res.status(200).send({message: "Chat informations updated succesfully!", updatedChat});
    } catch (error) {
        errorHandler(error, res);
    }
}

const deleteUserChatById = async(req, res) => {
    try {
        const id = req.params.id;
        await UserChatsModel.destroy({where: {id: id}});
        res.status(200).send({message: "Chat deleted succesfully"});
    } catch (error) {
        errorHandler(error, res)
    }
}

module.exports = {
    addNewUserChat,
    getAllUserChats,
    getUserChatById,
    updateUserChatById,
    deleteUserChatById
}