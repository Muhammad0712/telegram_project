const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const UsersModel = sequelize.define("users_informations", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        phone_number: {
            type: DataTypes.STRING,
            unique: true
        },
        profil_photo: {
            type: DataTypes.STRING
        },
        bio: {
            type: DataTypes.TEXT
        },
        user_id: {
            type: DataTypes.INTEGER
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }

);

module.exports = UsersModel;