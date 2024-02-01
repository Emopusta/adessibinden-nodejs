import { DataTypes } from 'sequelize';
import { sequelize } from "../config/database.js";


const PhoneRAM = sequelize.define('PhoneRAM', {
  Id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'Id'
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
  Memory: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'Memory'
  }
}, {
  tableName: 'phoneRAMs',
  timestamps: false
});

export default PhoneRAM;
