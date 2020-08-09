const express = require("express");
const cors = require("cors");
const db = require("./models");
const morgan = require("morgan");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
//db sync
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Hutech Drug Interactions application." });
});

// routes
require('./routes/auth.routes')(app);
require("./routes/users.routes")(app);
require("./routes/drug.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
