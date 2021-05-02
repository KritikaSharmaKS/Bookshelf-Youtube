const bookshelf = require('../util/database');

const Order = bookshelf.model('Order', {
  tableName: 'orders'
})

module.exports = Order;