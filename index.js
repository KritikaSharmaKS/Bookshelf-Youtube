const Customer = require("./models/customer");
const Order = require("./models/order");

let customerId = null;
new Customer({name: "Chandler Bing", email: "cb@gmail.com"})
    .save()
    .then(customer => {
        console.log("First Customer Created: ", customer);
    })
    .catch((err) => {
        console.log(err);
    });

