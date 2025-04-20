const { errorHandler } = require("../helpers/error.handler");
const MessageReads = require('../models/message.reads.model');


const addNewMessageRead = async(req, res) => {
    try {
        const newMessageRead = await MessageReads.create({...req.body});
        res.status(201).send({ message: "Message created succesfully!", newMessageRead});
    } catch (error) {
        errorHandler(error, res);
    }
}

const getAllMessageReads = async(req, res) => {
    try {
        const allMessageReads = await MessageReads.findAll();
        res.status(200).send({ allMessageReads });
    } catch (error) {
        errorHandler(error, res)
    }
}

const getMessageReadById = async(req, res) => {
    try {
        const id = req.params.id;
        const messageRead = await MessageReads.findByPk(id);
        res.status(200).send({messageRead});
    } catch (error) {
        errorHandler(error, res)
    }
}
const updateMessageReadById = async(req, res) => {
    try {
        const id = req.params.id;
        const updatedMessageRead = await MessageReads.update({...req.body}, {where: {id: id}});
        res.status(200).send({message: "MessageRead informations updated succesfully!", updatedMessageRead});
    } catch (error) {
        errorHandler(error, res);
    }
}

const deleteMessageReadById = async(req, res) => {
    try {
        const id = req.params.id;
        await MessageReads.destroy({where: {id: id}});
        res.status(200).send({message: "MessageRead deleted succesfully"});
    } catch (error) {
        errorHandler(error, res)
    }
}

module.exports = {
    addNewMessageRead,
    getAllMessageReads,
    getMessageReadById,
    updateMessageReadById,
    deleteMessageReadById
}