const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const UserChatsModel = sequelize.define("user_chats", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        chat_id: {
            type: DataTypes.INTEGER
        },
        joined_at: {
            type: DataTypes.DATE
        },
        notifications_enabled: {
            type: DataTypes.BOOLEAN
        },
        last_read_message_time: {
            type: DataTypes.DATE
        },
        role: {
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }

);

module.exports = UserChatsModel;