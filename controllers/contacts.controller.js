const { errorHandler } = require("../helpers/error.handler");
const ContactsModel = require('../models/contacts.model');


const addNewContact = async(req, res) => {
    try {
        const newContact = await ContactsModel.create({...req.body});
        res.status(201).send({message: "User created succesfully!", newContact});
    } catch (error) {
        errorHandler(error, res);
    }
}

const getAllContacts = async(req, res) => {
    try {
        const allContacts = await ContactsModel.findAll();
        res.status(200).send({allContacts});
    } catch (error) {
        errorHandler(error, res)
    }
}

const getContactById = async(req, res) => {
    try {
        const id = req.params.id;
        const contact = await ContactsModel.findByPk(id);
        res.status(200).send({contact});
    } catch (error) {
        errorHandler(error, res)
    }
}
const updateContactById = async(req, res) => {
    try {
        const id = req.params.id;
        const updatedContact = await ContactsModel.update({...req.body}, {where: {id: id}});
        res.status(200).send({message: "Contact updated succesfully!", updatedContact});
    } catch (error) {
        errorHandler(error, res);
    }
}

const deleteContactById = async(req, res) => {
    try {
        const id = req.params.id;
        await ContactsModel.destroy({where: {id: id}});
        res.status(200).send({message: "Contact deleted succesfully"});
    } catch (error) {
        errorHandler(error, res)
    }
}

module.exports = {
    addNewContact,
    getAllContacts,
    getContactById,
    updateContactById,
    deleteContactById
}