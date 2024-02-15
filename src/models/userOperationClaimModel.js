import { DataTypes } from 'sequelize';
import { sequelize } from "../config/database.js";
import User from './userModel.js';
import OperationClaim from './operationClaimModel.js';


const UserOperationClaim = sequelize.define('UserOperationClaim', {
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
  OperationClaimId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'OperationClaimId'
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
}, {
  tableName: 'userOperationClaims',
  timestamps: false
});

UserOperationClaim.belongsTo(User, { foreignKey: 'UserId', onDelete: 'CASCADE', as: 'User' });
UserOperationClaim.belongsTo(OperationClaim, { foreignKey: 'OperationClaimId', onDelete: 'CASCADE', as: 'OperationClaim' });

export default UserOperationClaim
