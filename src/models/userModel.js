import { Sequelize } from "sequelize";
import { sequelize } from "../config/database.js";

export var User = sequelize.define('user', {
    id : {
        type: Sequelize.INTEGER,
        field: 'Id',
        primaryKey: true,
        autoIncrement:true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        field: 'Email',
        allowNull: false
    },
    passwordHash: {
        type: Sequelize.STRING,
        field: 'PasswordHash',
        allowNull: false
    },
    passwordSalt: {
        type: Sequelize.STRING,
        field: 'PasswordSalt',
        allowNull: false
    },
    createdDate: {
        type: Sequelize.DATE,
        field: "CreatedDate",
        defaultValue: new Date(),
        allowNull: false
    },
    updatedDate: {
        type: Sequelize.DATE,
        field: "UpdatedDate",
    },
    deletedDate: {
        type: Sequelize.DATE,
        field: "DeletedDate",
    }
}, {
    timestamps:false
})
