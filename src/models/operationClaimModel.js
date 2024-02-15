import { DataTypes } from 'sequelize';
import { sequelize } from "../config/database.js";

const OperationClaim = sequelize.define('OperationClaim', {
  Id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'Id'
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'Name'
  },
  CreatedDate: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
    allowNull: false,
    field: 'CreatedDate'
  },
  UpdatedDate: {
    type: DataTypes.DATE,
    field: 'UpdatedDate'
  },
  DeletedDate: {
    type: DataTypes.DATE,
    field: 'DeletedDate'
  },
}, {
  tableName: 'operationClaims',
  timestamps: false 
});


export default OperationClaim;
