import { DataTypes } from 'sequelize';
import { sequelize } from "../config/database.js";
import  User  from './userModel.js';
import ProductCategory from './productCategoryModel.js';


const Product = sequelize.define('Product', {
  Id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'Id'
  },
  CreatorUserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'CreatorUserId'
  },
  ProductCategoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'ProductCategoryId'
  },
  Description: {
    type: DataTypes.STRING,
    field: 'Description'
  },
  Title: {
    type: DataTypes.STRING,
    field: 'Title'
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
  }
}, {
  tableName: 'products',
  timestamps: false 
});

Product.belongsTo(User, { foreignKey: 'CreatorUserId', onDelete: 'SET NULL', as: 'CreatorUser' });
Product.belongsTo(ProductCategory, { foreignKey: 'ProductCategoryId', onDelete: 'SET NULL', as: 'ProductCategory' });

export default Product;
