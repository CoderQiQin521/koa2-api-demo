var mysql = require('mysql')
var config = require('./config')

var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE
})


let allServices = {
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {

            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  },
  all: function () {
    let sql = 'select * from amway_product'
    return allServices.query(sql)
  },
  find: function (id) {
    let sql = `select * from amway_product where id=${id}`
    return allServices.query(sql)
  }
}

module.exports = allServices
