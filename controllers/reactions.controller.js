const { errorHandler } = require("../helpers/error.handler");
const Reactions = require('../models/reactions.model');


const addNewReaction = async(req, res) => {
    try {
        const newReaction = await Reactions.create({...req.body});
        res.status(201).send({message: "Reaction created succesfully!", newReaction});
    } catch (error) {
        errorHandler(error, res);
    }
}

const getAllReactions = async(req, res) => {
    try {
        const allReactions = await Reactions.findAll();
        res.status(200).send({ allReactions });
    } catch (error) {
        errorHandler(error, res)
    }
}

const getReactionById = async(req, res) => {
    try {
        const id = req.params.id;
        const reaction = await Reactions.findByPk(id);
        res.status(200).send({reaction});
    } catch (error) {
        errorHandler(error, res)
    }
}
const updateReactionById = async(req, res) => {
    try {
        const id = req.params.id;
        const updatedReaction = await Reactions.update({...req.body}, {where: {id: id}});
        res.status(200).send({message: "Reaction updated succesfully!", updatedReaction});
    } catch (error) {
        errorHandler(error, res);
    }
}

const deleteReactionById = async(req, res) => {
    try {
        const id = req.params.id;
        await Reactions.destroy({where: {id: id}});
        res.status(200).send({ message: "Reaction deleted succesfully"});
    } catch (error) {
        errorHandler(error, res)
    }
}

module.exports = {
    addNewReaction,
    getAllReactions,
    getReactionById,
    updateReactionById,
    deleteReactionById
}