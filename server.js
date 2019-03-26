// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");

// var app = express();
// var PORT = process.env.PORT || 8080;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.use(express.static("app/public")); //not sure what this does? for publishing?



// require("./app/routing/apiRoutes.js")(app);
// require("./app/routing/htmlRoutes.js")(app);



// app.listen(PORT, function() {
//   console.log("App listening on PORT: " + PORT);
// });

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(port, () => console.log("Listening on port %s", port));

