import { DataTypes } from 'sequelize';
import { sequelize } from "../config/database.js";
import Color from './colorModel.js';
import PhoneInternalMemory from './phoneInternalMemory.js';
import PhoneModel from './phoneModelModel.js';
import PhoneRAM from './phoneRAMModel.js';
import Product from './productModel.js';


const PhoneProduct = sequelize.define('PhoneProduct', {
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
  ProductId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'ProductId'
  },
  ColorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'ColorId'
  },
  ModelId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'ModelId'
  },
  InternalMemoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'InternalMemoryId'
  },
  RAMId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'RAMId'
  },
  UsageStatus: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'UsageStatus'
  },
  Price: {
    type: DataTypes.DECIMAL(10, 2), 
    allowNull: false,
    field: 'Price'
  }
}, {
  tableName: 'phoneProducts',
  timestamps: false 
});

PhoneProduct.belongsTo(Color, { foreignKey: 'ColorId', onDelete: 'SET NULL', as: 'Color' });
PhoneProduct.belongsTo(PhoneInternalMemory, { foreignKey: 'InternalMemoryId', onDelete: 'SET NULL', as: 'InternalMemory' });
PhoneProduct.belongsTo(PhoneModel, { foreignKey: 'ModelId', onDelete: 'SET NULL', as: 'Model' });
PhoneProduct.belongsTo(Product, { foreignKey: 'ProductId', onDelete: 'SET NULL', as: 'Product' });
PhoneProduct.belongsTo(PhoneRAM, { foreignKey: 'RAMId', onDelete: 'SET NULL', as: 'RAM' });

export default PhoneProduct;
