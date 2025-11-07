require('dotenv').config();
const app = require('./src/app');
const sequelize = require('./src/config/database');
const { User, Candidate, Exam } = require('./src/models/index');

const PORT = process.env.PORT || 3000;

// Sync database & start server
sequelize.sync({ alter: false })
  .then(() => {
    console.log('✅ Database synced');
    console.log('✅ Models loaded: User, Candidate, Exam');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Database sync failed:', err);
  });

