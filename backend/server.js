require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const PORT = process.env.PORT || 5000;
const api = require("./routes/router");
const {
  MONGODB_URI,
  USER,
  PASS,
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_LIFE,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_LIFE,
  ORIGIN,
} = require("./config");
// Express setup
const app = express();
app.use(cors({ origin: ORIGIN, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("port", process.env.PORT || 5000);

// Database connection
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to database."))
  .catch((e) => console.error(e));

app.use("/api", api);

// For Heroku deployment
// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, "/../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/../frontend/build/index.html"));
  });
}

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", ORIGIN);
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,UPDATE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
