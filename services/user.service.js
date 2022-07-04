const boom = require('@hapi/boom');
const pool = require('../libs/mysql.pool');
const bcrypt = require('bcrypt');
const saltRounds = 12;

class UserService {
  constructor() { }

  getUser(username) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          console.log(err);
          throw boom.forbidden('Error with pool connection.');
        } else {
          //  connection.query(`select fullname from user where user='${user}' and password='${password}'`, 
          connection.query(`select * from Users where username='${username}'`,
            (error, record, fields) => {
              if (!error) return resolve(record[0]);

              console.log(error)
              return reject(error)
            })
        }
      })
    })
  }

  async getFullName(username, password) {
    const userData = await this.getUser(username);
    if (!userData) throw boom.unauthorized('Error user not exist.');
    return bcrypt.compare(password, userData.password).then(function (result) {
      if (result) {
        const { fullname } = userData;
        return { fullname }
      }
      throw boom.unauthorized('Error password incorrect.');
    });
  }
}

module.exports = UserService;