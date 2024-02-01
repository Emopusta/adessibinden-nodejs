import { DataTypes } from 'sequelize';
import { sequelize } from "../config/database.js";
import PhoneBrand from './phoneBrandModel.js';


const PhoneModel = sequelize.define('PhoneModel', {
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
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'Name'
  },
  BrandId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'BrandId'
  }
}, {
  tableName: 'phoneModels',
  timestamps: false 
});


PhoneModel.belongsTo(PhoneBrand, { foreignKey: 'BrandId', onDelete: 'SET NULL', as: 'Brand' });

export default PhoneModel;
