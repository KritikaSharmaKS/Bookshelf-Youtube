const Customer = require("./models/customer");
const Order = require("./models/order");

let customerId = null;
Customer
    .forge({name: "Monica Geller", email: "mg@gmail.com"})
    .save()
    .then(customer => {
        console.log("Second Customer Created: ", customer);
        return Customer
            .forge({id: customer.id})
            .fetch()
    })
    .then((model) => {
        console.log(model.get('id'));
    })
    .catch((err) => {
        console.log(err);
    });
