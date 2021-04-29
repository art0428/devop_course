const Sequelize = require('sequelize');


var config = {
    url: {
        dialect: 'mysql',
        host: 'host.docker.internal',
        port: 3306,
        logging: false
    },
    auth: {
        db_name: 'starwar',
        username: 'user',
        password: '123456'
    }
}




const sequelize = new Sequelize(config.auth.db_name, config.auth.username, config.auth.password, config.url);

sequelize
  .authenticate()
  .then(() => {
    console.log('Mysql connection has been established successfully.');
  })
  .catch(err => {
    console.error('[Connection Fail!!!!!]Unable to connect to the mysql database:', err);
  });




var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
