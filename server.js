const express = require("express");
const routes = require("./routes");

//importing database seed function to seed all the databases on server start
const seedAll = require("./seeds/index");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

//after the seeding is done, the server is started
seedAll().then(() => {
  app.listen(PORT, () => {
    console.log(`"Server is listening in port ${PORT}"`);
  });
});
