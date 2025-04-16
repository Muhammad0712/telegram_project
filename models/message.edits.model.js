const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Messages = sequelize.define("messages", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        message_id: {
            type: DataTypes.INTEGER
        },
        privious_content: {
            type: DataTypes.TEXT
        },
        newContent: {
            type: DataTypes.TEXT
        },
        edited_at: {
            type: DataTypes.DATE
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }

);

module.exports = Messages;