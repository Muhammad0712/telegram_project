const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Messages = sequelize.define("messages", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        chat_id: {
            type: DataTypes.INTEGER
        },
        reply_to_messages: {
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        sent_at: {
            type: DataTypes.DATE
        },
        content: {
            type: DataTypes.TEXT
        },
        is_edited: {
            type: DataTypes.BOOLEAN
        },
        is_deleted: {
            type: DataTypes.BOOLEAN
        },
        is_pinned: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }

);

module.exports = Messages;
