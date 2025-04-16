const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const ChatPosts = sequelize.define("chat_posts", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        channel_id: {
            type: DataTypes.INTEGER
        },
        message_id: {
            type: DataTypes.INTEGER
        },
        views_count: {
            type: DataTypes.INTEGER
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }

);

module.exports = ChatPosts;