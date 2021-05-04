const Customer = require("./models/customer");
const Order = require("./models/order");

let customerId = null;
Customer.forge({ name: "Joey Tribianni", email: "jt@gmail.com" })
  .save()
  .then((customer) => {
    customerId = customer.id;
    return Order.forge({ total: 45, customer_id: customerId }).save();
  })
  .then((order) => {
    return Order.forge({ total: 55, customer_id: customerId }).save();
  })
  .then((order) => {
    return Customer.where({ id: customerId }).fetch({
        withRelated: ['orders'], require: true
    });
  })
  .then(result => {
      console.clear();
      console.log("Result is : ", result.toJSON());
  })
  .catch((err) => {
    console.log(err);
  });
