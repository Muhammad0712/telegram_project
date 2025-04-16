const { errorHandler } = require("../helpers/error.handler");
const MessageEdits = require('../models/message.edits.model');


const addNewMessageEdit = async(req, res) => {
    try {
        const newMessageEdit = await MessageEdits.create({...req.body});
        res.status(201).send({message: "Message created succesfully!", newMessageEdit});
    } catch (error) {
        errorHandler(error, res);
    }
}

const getAllMessageEdits = async(req, res) => {
    try {
        const allMessageEdits = await MessageEdits.findAll();
        res.status(200).send({allMessageEdits});
    } catch (error) {
        errorHandler(error, res)
    }
}

const getMessageEditsById = async(req, res) => {
    try {
        const id = req.params.id;
        const messageEdit = await MessageEdits.findByPk(id);
        res.status(200).send({messageEdit});
    } catch (error) {
        errorHandler(error, res)
    }
}
const updateMessageEditById = async(req, res) => {
    try {
        const id = req.params.id;
        const editedMessage = await MessageEdits.update({...req.body}, {where: {id: id}});
        res.status(200).send({message: "Message informations updated succesfully!", editedMessage});
    } catch (error) {
        errorHandler(error, res);
    }
}

const deleteMessageEditById = async(req, res) => {
    try {
        const id = req.params.id;
        await MessageEdits.destroy({where: {id: id}});
        res.status(200).send({message: "Message deleted succesfully"});
    } catch (error) {
        errorHandler(error, res)
    }
}

module.exports = {
    addNewMessageEdit,
    getAllMessageEdits,
    getMessageEditsById,
    updateMessageEditById,
    deleteMessageEditById
}