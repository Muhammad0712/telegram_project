const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const ChatAdminsModel = sequelize.define("chat_admins", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        chat_id: {
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        photo: {
            type: DataTypes.TEXT
        },
        can_edit_message: {
            type: DataTypes.BOOLEAN
        },
        can_delete_message: {
            type: DataTypes.BOOLEAN
        },
        can_add_member: {
            type: DataTypes.BOOLEAN
        },
        can_invite: {
            type: DataTypes.BOOLEAN,
        },
        can_pin_messages: {
            type: DataTypes.BOOLEAN
        },
        promored_at: {
            type: DataTypes.DATE
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }

);

module.exports = ChatAdminsModel;