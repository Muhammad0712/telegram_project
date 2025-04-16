const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Channels = sequelize.define("channels", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        chat_id: {
            type: DataTypes.INTEGER
        },
        is_verified: {
            type: DataTypes.BOOLEAN
        },
        subscribers_count: {
            type: DataTypes.INTEGER
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }

);

module.exports = Channels;