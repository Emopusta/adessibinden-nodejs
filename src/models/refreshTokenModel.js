import { DataTypes } from 'sequelize';
import { sequelize } from "../config/database.js";

const RefreshToken = sequelize.define('RefreshToken', {
  Id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'Id'
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'UserId'
  },
  Token: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'Token'
  },
  Expires: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'Expires'
  },
  CreatedByIp: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'CreatedByIp'
  },
  Revoked: {
    type: DataTypes.DATE,
    field: 'Revoked'
  },
  RevokedByIp: {
    type: DataTypes.STRING,
    field: 'RevokedByIp'
  },
  ReplacedByToken: {
    type: DataTypes.STRING,
    field: 'ReplacedByToken'
  },
  ReasonRevoked: {
    type: DataTypes.STRING,
    field: 'ReasonRevoked'
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
  tableName: 'refreshTokens',
  timestamps: false 
});


export default RefreshToken;
