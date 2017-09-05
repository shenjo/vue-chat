/**
 * Created by SHENJO on 8/25/2017.
 */
const express = require('express'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  MongoStore = require('connect-mongo')(session),
  route = require('./index');
let db = require('./mongoose').db;

let app = express();
app.set('trust proxy', 1);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());

app.use(session({
  secret: 'vue-chat-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, httpOnly: true, maxAge: 24 * (60 * 60 * 1000), },
  store: new MongoStore({
    mongooseConnection: db.connection,
    collection: 'sessions_vuechat'
  })
}));

//passport
require('./passport.config')(app);




route(app);

app.listen(3000, () => {
  console.log('server running....')
});