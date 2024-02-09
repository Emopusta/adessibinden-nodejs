import { DataTypes } from 'sequelize';
import { sequelize } from "../config/database.js";
import Product from './productModel.js';
import User from './userModel.js';

const UserFavouriteProduct = sequelize.define('UserFavouriteProduct', {
  ProductId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'ProductId'
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'UserId'
  }
}, {
  tableName: 'userFavouriteProducts',
  timestamps: false
});

UserFavouriteProduct.belongsTo(Product, { foreignKey: 'ProductId', onDelete: 'SET NULL', as: 'Product' });
UserFavouriteProduct.belongsTo(User, { foreignKey: 'UserId', onDelete: 'SET NULL', as: 'User' });

export default UserFavouriteProduct;