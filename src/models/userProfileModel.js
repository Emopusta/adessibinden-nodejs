import { DataTypes } from 'sequelize';
import { sequelize } from "../config/database.js";
import User from './userModel.js';

const UserProfile = sequelize.define('UserProfile', {
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
  Address: {
    type: DataTypes.STRING, 
    field: 'Address'
  },
  FirstName: {
    type: DataTypes.STRING, 
    field: 'FirstName'
  },
  LastName: {
    type: DataTypes.STRING, 
    field: 'LastName'
  },
  BirthDate: {
    type: DataTypes.DATE,
    field: 'BirthDate'
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'UserId'
  }
}, {
  tableName: 'userProfiles',
  timestamps: false 
});

UserProfile.belongsTo(User, { foreignKey: 'UserId', onDelete: 'SET NULL', as: 'User' });

export default UserProfile;