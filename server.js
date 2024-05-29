const express = require("express");
const routes = require("./routes");

// importing sequelize connection
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// syncing sequelize models to the database, then turning on the server

app.listen(PORT, () => console.log(`Server is Now listening on port: ${PORT}`));
