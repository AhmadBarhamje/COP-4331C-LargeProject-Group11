require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const path = require('path');
const PORT = process.env.PORT || 5000;
const emailAPI = require("./emailer");

// Express setup
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.set('port', (process.env.PORT || 5000));

// MongoDB connection
const url = process.env.MONGODB_URI;
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(url);
client.connect();

const {login, refresh} = require("./authentication");

// For Heroku deployment
// Server static assets if in production
if (process.env.NODE_ENV === 'production') 
{
  // Set static folder
  app.use(express.static(path.join(__dirname, '/../frontend/build')));

  app.get('*', (req, res) => 
 {
    res.sendFile(path.join(__dirname, '/../frontend/build/index.html'));
  });
}
//////////////////////////////////////////////////

app.post('/api/login', async (req, res, next) => 
{
  // incoming: login, password
  // outgoing: id, firstName, lastName, error

 var error = '';

  const { login, password } = req.body;

  const db = client.db();
  const results = await db.collection('Employees').find({userName:login,password:password}).toArray();

  var id = -1;
  var fn = '';
  var ln = '';

  if( results.length > 0 )
  {
    id = results[0].userId;
    fn = results[0].firstName;
    ln = results[0].lastName;

    // Used to test sending emails
    // try {
    //     emailAPI.sendEmail("test", "test");
    // } catch (e) {
    //     console.error(e);
    //     throw e;
    // }
  }

  var ret = { id:id, firstName:fn, lastName:ln, error:''};
  res.status(200).json(ret);
});

app.use((req, res, next) => 
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});


app.listen(PORT, () =>
{
  console.log(`Server listening on port ${PORT}.`);
}); // start Node + Express server on port 5000