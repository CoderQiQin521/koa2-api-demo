const DbClient = require('ali-mysql-client')
const db = new DbClient({
  host: '39.105.37.214',
  user: 'amway',
  password: 'amwayroot',
  database: 'amway'
})


const resAll = db.select('*').from('amway_product').queryList()

module.exports = {
  resAll
}
