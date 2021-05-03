const knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : '9871709924',
    database : 'ks-store',
    charset  : 'utf8'
  }
});

bookshelf = require('bookshelf')(knex);

// Bookshelf supported plugins.
bookshelf.plugin('registry');
bookshelf.plugin('visibility');

module.exports = bookshelf;