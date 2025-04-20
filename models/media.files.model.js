const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const MediaFiles = sequelize.define("media_files", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        message_id: {
            type: DataTypes.INTEGER
        },
        file_type: {
            type: DataTypes.STRING
        },
        file_path: {
            type: DataTypes.TEXT
        },
        file_size: {
            type: DataTypes.DECIMAL
        },
        mime_type: {
            type: DataTypes.STRING
        },
        thumbnail_path: {
            type: DataTypes.TEXT
        },
        width: {
            type: DataTypes.INTEGER
        },
        height: {
            type: DataTypes.INTEGER
        },
        duration: {
            type: DataTypes.INTEGER
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }

);

module.exports = MediaFiles;
