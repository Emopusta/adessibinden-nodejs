import { DataTypes } from 'sequelize';
import { define } from '<your sequelize instance>';
import Product from './productModel';
import User from './userModel';

const UserFavouriteProduct = define('UserFavouriteProduct', {
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
