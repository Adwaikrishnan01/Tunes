import express from 'express';
import colors from "colors";
import dotenv from "dotenv"
var redirect_uri = 'http://localhost:8888/callback';

var app = express();
dotenv.config();
app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.CLIENT_ID,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});
