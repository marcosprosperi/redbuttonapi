import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import configureRoute from "./routes";


dotenv.config();

const Pusher = require('pusher');
const app = express();
const { PUSHER_APP_ID, PUSHER_KEY, PUSHER_SECRET, PUSHER_CLUSTER, PUSHER_USE_TLS } = process.env;


const channels_client = new Pusher({
  appId: PUSHER_APP_ID,
  key: PUSHER_KEY,
  secret: PUSHER_SECRET,
  cluster: PUSHER_CLUSTER,
  useTLS: PUSHER_USE_TLS
})

app.use(bodyParser.json());

app.get("/", (req, res) => {
  if (req.body) {
    res.send(`body: ${req.body.name} `);
  }
});

configureRoute(app);

app.listen(3000);