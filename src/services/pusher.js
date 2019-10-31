import dotenv from "dotenv"
dotenv.config()

const Pusher = require('pusher')
const { PUSHER_APP_ID, PUSHER_KEY, PUSHER_SECRET, PUSHER_CLUSTER, PUSHER_USE_TLS } = process.env


const channels_client = new Pusher({
  appId: PUSHER_APP_ID,
  key: PUSHER_KEY,
  secret: PUSHER_SECRET,
  cluster: PUSHER_CLUSTER,
  useTLS: PUSHER_USE_TLS
})

export default channels_client