const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const ChatsModel = sequelize.define("chats", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        photo: {
            type: DataTypes.TEXT
        },
        type: {
            type: DataTypes.TEXT
        },
        members_cout: {
            type: DataTypes.INTEGER
        },
        invite_link: {
            type: DataTypes.TEXT
        },
        created_at: {
            type: DataTypes.DATE
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }

);

module.exports = ChatsModel;