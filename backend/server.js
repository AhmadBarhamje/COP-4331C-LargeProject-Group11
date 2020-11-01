require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const PORT = process.env.PORT || 5000;
const api = require("./routes/router");

// Express setup
const app = express();
app.use(cors({origin: process.env.ORIGIN, credentials: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.set('port', (process.env.PORT || 5000));

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => console.log("Connected to database."))
.catch((e) => console.error(e));

// For Heroku deployment
// Server static assets if in production
if (process.env.NODE_ENV === 'production') 
{
  // Set static folder
  app.use(express.static(path.join(__dirname, '/../frontend/build')));

  app.get('/', (req, res) => 
 {
    res.sendFile(path.join(__dirname, '/../frontend/build/index.html'));
  });
}

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', process.env.ORIGIN);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
})

app.get("/", (req, res) => {
  return res.status(200).send('ok');
})

app.use('/api', api);

app.listen(PORT, () =>
{
  console.log(`Server listening on port ${PORT}.`);
});