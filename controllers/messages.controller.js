const { errorHandler } = require("../helpers/error.handler");
const Messages = require('../models/messages.model');


const addNewMessage = async(req, res) => {
    try {
        const newMessage = await Messages.create({...req.body});
        res.status(201).send({message: "Message created succesfully!", newMessage});
    } catch (error) {
        errorHandler(error, res);
    }
}

const getAllMessages = async(req, res) => {
    try {
        const allMessages = await Messages.findAll();
        res.status(200).send({allMessages});
    } catch (error) {
        errorHandler(error, res)
    }
}

const getMessageById = async(req, res) => {
    try {
        const id = req.params.id;
        const message = await Messages.findByPk(id);
        res.status(200).send({message});
    } catch (error) {
        errorHandler(error, res)
    }
}
const updateMessageById = async(req, res) => {
    try {
        const id = req.params.id;
        const updatedMessage = await Messages.update({...req.body}, {where: {id: id}});
        res.status(200).send({message: "Message informations updated succesfully!", updatedMessage});
    } catch (error) {
        errorHandler(error, res);
    }
}

const deleteMessageById = async(req, res) => {
    try {
        const id = req.params.id;
        await Messages.destroy({where: {id: id}});
        res.status(200).send({message: "Message deleted succesfully"});
    } catch (error) {
        errorHandler(error, res)
    }
}

module.exports = {
    addNewMessage,
    getAllMessages,
    getMessageById,
    updateMessageById,
    deleteMessageById
}