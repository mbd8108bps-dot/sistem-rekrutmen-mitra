const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Candidate = sequelize.define('Candidate', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  full_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING(20)
  },
  cv_url: {
    type: DataTypes.STRING(255)
  },
  status: {
    type: DataTypes.ENUM('applied', 'shortlisted', 'invited', 'completed', 'rejected'),
    defaultValue: 'applied'
  }
}, {
  tableName: 'candidates',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = Candidate;

