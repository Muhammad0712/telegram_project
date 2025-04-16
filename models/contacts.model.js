const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const ContactsModel = sequelize.define("contacts", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        display_name: {
            type: DataTypes.STRING
        },
        is_blocked: {
            type: DataTypes.BOOLEAN
        },
        added_on: {
            type: DataTypes.DATE
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }

);

module.exports = ContactsModel;