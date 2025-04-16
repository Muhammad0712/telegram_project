const { errorHandler } = require("../helpers/error.handler");
const ChatsModel = require('../models/chats.model');


const addNewChat = async(req, res) => {
    try {
        const newChat = await ChatsModel.create({...req.body});
        res.status(201).send({message: "User created succesfully!", newChat});
    } catch (error) {
        errorHandler(error, res);
    }
}

const getAllChat = async(req, res) => {
    try {
        const allChat = await ChatsModel.findAll();
        res.status(200).send({allChat});
    } catch (error) {
        errorHandler(error, res)
    }
}

const getChatById = async(req, res) => {
    try {
        const id = req.params.id;
        const chat = await ChatsModel.findByPk(id);
        res.status(200).send({chat});
    } catch (error) {
        errorHandler(error, res)
    }
}
const updateChatById = async(req, res) => {
    try {
        const id = req.params.id;
        const updatedChat = await ChatsModel.update({...req.body}, {where: {id: id}});
        res.status(200).send({message: "Chat informations updated succesfully!", updatedChat});
    } catch (error) {
        errorHandler(error, res);
    }
}

const deleteChatById = async(req, res) => {
    try {
        const id = req.params.id;
        await ChatsModel.destroy({where: {id: id}});
        res.status(200).send({message: "Chat deleted succesfully"});
    } catch (error) {
        errorHandler(error, res)
    }
}

module.exports = {
    addNewChat,
    getAllChat,
    getChatById,
    updateChatById,
    deleteChatById
}