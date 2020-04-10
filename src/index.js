import dotenv from "dotenv"
import express from "express"
import bodyParser from "body-parser"
import configureRoute from "./routes"
import channels_client from "./services/pusher"
import cors from 'cors'

dotenv.config();


const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors())

var port = process.env.PORT || 8080;


app.post('/pusher/auth', function(req, res) {
  var socketId = req.body.socket_id;
  var channel = req.body.channel_name;
  var auth = channels_client.authenticate(socketId, channel);
  res.send(auth);
});


app.get("/", (req, res) => {
  if (req.body) {
    res.send(`body: ${req.body.name} `)
  }
})

configureRoute(app)

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});