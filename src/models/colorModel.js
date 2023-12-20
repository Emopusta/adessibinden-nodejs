import { Sequelize } from "sequelize";
import { sequelize } from "../config/database.js";

export var Color = sequelize.define('color', {
    id : {
        type: Sequelize.INTEGER,
        field: 'Id',
        primaryKey: true,
        autoIncrement:true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        field: 'Name',
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
