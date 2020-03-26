const express = require("express");
const mongoose = require("mongoose");
const players = require("./routes/api/players");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./config/keys").mongoURI;
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    allowedHeaders: ["Content-Type"]["Authorization"],
    exposedHeaders: ["Content-Type"]["Authorization"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false
  })
);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "*",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  
  mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log("Database connected.."))
  .catch(err => console.log(err));

  app.use("/api/players",players);

  app.listen(port, () => {
    console.log("Server started on port:" + port);
  });