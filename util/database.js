const knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : '9871709924',
    database : 'ks-store',
    charset  : 'utf8'
  }
})