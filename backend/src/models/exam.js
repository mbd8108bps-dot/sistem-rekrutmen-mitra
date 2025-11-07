const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Exam = sequelize.define('Exam', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  duration_minutes: {
    type: DataTypes.INTEGER,
    defaultValue: 60
  },
  passing_score: {
    type: DataTypes.INTEGER,
    defaultValue: 70
  },
  created_by: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  }
}, {
  tableName: 'exams',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = Exam;

