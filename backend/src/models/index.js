const User = require('./user');
const Candidate = require('./candidate');
const Exam = require('./exam');

// Define associations
Candidate.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Candidate, { foreignKey: 'user_id' });

Exam.belongsTo(User, { foreignKey: 'created_by', as: 'creator' });
User.hasMany(Exam, { foreignKey: 'created_by', as: 'exams_created' });

module.exports = {
  User,
  Candidate,
  Exam
};

