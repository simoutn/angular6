const express =require('express');
const app = express();
var router = express.Router;
const bodyParser = require('body-parser');
const auth = require('./Server/Routing/auth'); // Login & register
const admin =require('./Server/Routing/admin'); // Admin space
const bodyparser = require('body-parser');



//Enable bodyParser (middleware)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Enable CORS

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
// Session code
// app.use(session({
//   cookieName: 'session',
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());

//
app.use('/auth',auth);
app.use('/admin',admin);
module.exports=app;
