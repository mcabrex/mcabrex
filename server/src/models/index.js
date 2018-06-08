const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env]

const sequelize = config.use_env_variable ? 
new Sequelize(process.env[config.use_env_variable], config) : 
new Sequelize(config.database, config.username, config.password, config.dialect);

// const sequelize = new Sequelize('mcabrex', 'postgres', 'exodia92', {
//   dialect: 'postgres',
// });

const models = {
  List: sequelize.import('./list'),
  ListItem: sequelize.import('./listItem'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
