import { DataTypes } from 'sequelize';
import { sequelize } from "../config/database.js";
import RefreshToken from './refreshTokenModel.js';

const User = sequelize.define('User', {
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
  Email: {
    type: DataTypes.STRING, 
    allowNull: false,
    field: 'Email'
  },
  PasswordSalt: {
    type: DataTypes.STRING, 
    field: 'PasswordSalt'
  },
  PasswordHash: {
    type: DataTypes.STRING, 
    field: 'PasswordHash'
  },
  Status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: 'Status'
  }
}, {
  tableName: 'users',
  timestamps: false 
});

User.hasMany(RefreshToken, { foreignKey: 'UserId', as: 'RefreshTokens' });

export default User;