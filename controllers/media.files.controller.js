const { errorHandler } = require("../helpers/error.handler");
const MediaFiles = require('../models/media.files.model');


const addNewMediaFile = async(req, res) => {
    try {
        const newMediaFile = await MediaFiles.create({...req.body});
        res.status(201).send({ message: "Media file created succesfully!", newMediaFile });
    } catch (error) {
        errorHandler(error, res);
    }
}

const getAllMediaFiles = async(req, res) => {
    try {
        const allMediaFiles = await MediaFiles.findAll();
        res.status(200).send({ allMediaFiles });
    } catch (error) {
        errorHandler(error, res)
    }
}

const getMediaFileById = async(req, res) => {
    try {
        const id = req.params.id;
        const mediaFile = await allMediaFiles.findByPk(id);
        res.status(200).send({mediaFile});
    } catch (error) {
        errorHandler(error, res)
    }
}
const updateMediaFileById = async(req, res) => {
    try {
        const id = req.params.id;
        const updatedMediaFile = await MediaFiles.update({...req.body}, {where: {id: id}});
        res.status(200).send({message: "Media file updated succesfully!", updatedMediaFile});
    } catch (error) {
        errorHandler(error, res);
    }
}

const deleteMediaFileById = async(req, res) => {
    try {
        const id = req.params.id;
        await MediaFiles.destroy({where: {id: id}});
        res.status(200).send({message: "Media file deleted succesfully"});
    } catch (error) {
        errorHandler(error, res)
    }
}

module.exports = {
    addNewMediaFile,
    getAllMediaFiles,
    getMediaFileById,
    updateMediaFileById,
    deleteMediaFileById
}