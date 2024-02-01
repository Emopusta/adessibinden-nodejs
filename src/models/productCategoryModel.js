import { DataTypes } from 'sequelize';
import { sequelize } from "../config/database.js";


const ProductCategory = sequelize.define('ProductCategory', {
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
  }
}, {
  tableName: 'productCategories',
  timestamps: false 
});

export default ProductCategory;
