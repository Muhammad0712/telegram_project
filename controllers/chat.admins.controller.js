const { errorHandler } = require("../helpers/error.handler");
const ChatAdminModel = require('../models/chat.admins.model');


const addNewChatAdmin = async(req, res) => {
    try {
        const newChatAdmin = await ChatAdminModel.create({...req.body});
        res.status(201).send({message: "User created succesfully!", newChatAdmin});
    } catch (error) {
        errorHandler(error, res);
    }
}

const getAllChatAdmins = async(req, res) => {
    try {
        const allChatAdmins = await ChatAdminModel.findAll();
        res.status(200).send({allChatAdmins});
    } catch (error) {
        errorHandler(error, res)
    }
}

const getChatAdminById = async(req, res) => {
    try {
        const id = req.params.id;
        const chatAdmin = await ChatAdminModel.findByPk(id);
        res.status(200).send({chatAdmin});
    } catch (error) {
        errorHandler(error, res)
    }
}
const updateChatAdminById = async(req, res) => {
    try {
        const id = req.params.id;
        const updatedChatAdmin = await ChatAdminModel.update({...req.body}, {where: {id: id}});
        res.status(200).send({message: "Chat informations updated succesfully!", updatedChatAdmin});
    } catch (error) {
        errorHandler(error, res);
    }
}

const deleteChatAdminById = async(req, res) => {
    try {
        const id = req.params.id;
        await ChatAdminModel.destroy({where: {id: id}});
        res.status(200).send({message: "Chat deleted succesfully"});
    } catch (error) {
        errorHandler(error, res)
    }
}

module.exports = {
    addNewChatAdmin,
    getAllChatAdmins,
    getChatAdminById,
    updateChatAdminById,
    deleteChatAdminById
}