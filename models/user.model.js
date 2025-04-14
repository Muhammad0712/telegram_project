const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const UsersModel = sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        activation_link: {
            type: DataTypes.TEXT,
            defaultValue: ""
        },
        refresh_token: {
            type: DataTypes.TEXT,
            defaultValue: ""
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
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

module.exports = UsersModel;