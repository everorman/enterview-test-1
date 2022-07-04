const boom = require('@hapi/boom');
const pool = require('../libs/mysql.pool');

class UserService {
  constructor() { }

  getFullName(user, password) {
    // const client = await pool.getConnection();
    // const resultRows = await client.query(`select fullname from user where user='${user}' and password='${password}'`);
    // console.log(getFullName, resultRows[0].fullname);
    // return resultRows[0]

    return new Promise((resolve, reject) => {
      pool.getConnection( (err, connection)=>{
        if (err) {
          console.log(err);
          throw boom.forbidden('Error with pool connection.');
        }else{
          //  connection.query(`select fullname from user where user='${user}' and password='${password}'`, 
          console.log('Realizando consulta....')
           connection.query(`select fullname from Users`, 
           (error, record, fields)=>{
            if(!error) return resolve(record[0]);
            console.log(error)
            return reject(error)
          })
        }
      })
    })
    
    
  }
}

module.exports = UserService;