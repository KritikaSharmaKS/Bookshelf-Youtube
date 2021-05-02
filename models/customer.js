const bookshelf = require('../util/database');

const Customer = bookshelf.model('Customer', {
  tableName: 'customers',
  orders() {
    return this.hasMany(Orders)
  }
});

module.exports = Customer;
