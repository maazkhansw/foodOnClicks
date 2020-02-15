var express           =   require("express"),
    app               =   express(),
    bodyParser        =   require("body-parser");

const port = process.env.PORT || 3000;

//Requiring routes
var indexRoute          = require("./routes/index.js"),
    customerRoute       = require("./routes/customer.js"),
    restaurantRoute     = require("./routes/restaurant.js"),
    itemRoute           = require("./routes/item.js");

//App using following
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));

app.use(indexRoute);
app.use(customerRoute);
app.use(restaurantRoute);
app.use(itemRoute);

//Server startup 
app.listen(port, process.env.IP, function(){
    console.log("Food-on-one-click server is running on port " + port);
});