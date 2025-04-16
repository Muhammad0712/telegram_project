const { errorHandler } = require("../helpers/error.handler");
const ChatsPosts = require('../models/chat.posts.model');


const addNewChatPost = async(req, res) => {
    try {
        const newChatPost = await ChatsPosts.create({...req.body});
        res.status(201).send({message: "Chat post created succesfully!", newChatPost});
    } catch (error) {
        errorHandler(error, res);
    }
}

const getAllChatPosts = async(req, res) => {
    try {
        const allChatPosts = await ChatsPosts.findAll();
        res.status(200).send({allChatPosts});
    } catch (error) {
        errorHandler(error, res)
    }
}

const getChatPostById = async(req, res) => {
    try {
        const id = req.params.id;
        const chatPost = await ChatsPosts.findByPk(id);
        res.status(200).send({chatPost});
    } catch (error) {
        errorHandler(error, res)
    }
}
const updateChatPostById = async(req, res) => {
    try {
        const id = req.params.id;
        const updatedChatPost = await ChatsPosts.update({...req.body}, {where: {id: id}});
        res.status(200).send({message: "Chat post informations updated succesfully!", updatedChatPost});
    } catch (error) {
        errorHandler(error, res);
    }
}

const deleteChatPostById = async(req, res) => {
    try {
        const id = req.params.id;
        await ChatsPosts.destroy({where: {id: id}});
        res.status(200).send({message: "Chat post deleted succesfully"});
    } catch (error) {
        errorHandler(error, res)
    }
}

module.exports = {
    addNewChatPost,
    getAllChatPosts,
    getChatPostById,
    updateChatPostById,
    deleteChatPostById
}