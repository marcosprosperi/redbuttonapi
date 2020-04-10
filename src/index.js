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
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'https://serene-ptolemy-324869.netlify.com/')

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)

  // Pass to next layer of middleware
  next()
})

app.use(cors())




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

app.listen(80)