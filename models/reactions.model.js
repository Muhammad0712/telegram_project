const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Reactions = sequelize.define("reactions", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        message_id: {
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        emoji: {
            type: DataTypes.STRING
        },
        reacted_at: {
            type: DataTypes.DATE
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }

);

module.exports = Reactions;
