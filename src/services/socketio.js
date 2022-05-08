const { Server } = require("socket.io")
const http = require('http')

const initSocketService = (app) => {
  const server = http.createServer(app);
  return new Server(server)
}

export default initSocketService;