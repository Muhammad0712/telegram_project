const { errorHandler } = require("../helpers/error.handler");
const Channels = require('../models/channels.model');


const addNewChannel = async(req, res) => {
    try {
        const newChannel = await Channels.create({...req.body});
        res.status(201).send({message: "Channel created succesfully!", newChannel});
    } catch (error) {
        errorHandler(error, res);
    }
}

const getAllChannels = async(req, res) => {
    try {
        const allChannels = await Channels.findAll();
        res.status(200).send({allChannels});
    } catch (error) {
        errorHandler(error, res)
    }
}

const getChannelById = async(req, res) => {
    try {
        const id = req.params.id;
        const channel = await Channels.findByPk(id);
        res.status(200).send({channel});
    } catch (error) {
        errorHandler(error, res)
    }
}
const updateChannelById = async(req, res) => {
    try {
        const id = req.params.id;
        const updatedChannel = await Channels.update({...req.body}, {where: {id: id}});
        res.status(200).send({message: "Channel informations updated succesfully!", updatedChannel});
    } catch (error) {
        errorHandler(error, res);
    }
}

const deleteChannelById = async(req, res) => {
    try {
        const id = req.params.id;
        await Channels.destroy({where: {id: id}});
        res.status(200).send({message: "Channel deleted succesfully"});
    } catch (error) {
        errorHandler(error, res)
    }
}

module.exports = {
    addNewChannel,
    getAllChannels,
    getChannelById,
    updateChannelById,
    deleteChannelById
}