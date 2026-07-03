const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

require("./config/db");

const routes = require("./routes/bookRoutes");

app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", engine());

app.set("view engine", "handlebars");

app.set("views", "./views");

app.use("/", routes);

app.listen(3000, () => {

    console.log("Server Running http://localhost:3000");

});