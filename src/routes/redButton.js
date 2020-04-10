import { Router } from "express"
import channels_client from "../services/pusher"

const redButtonRoute = Router()
const games = []
const arrayLetters = "123456789abcdefghijklmnpqrstuvwxyz".split("")

redButtonRoute.post("/", (req, res) => {
  if (req.body) {
    
  }
})

redButtonRoute.post("/create", (req, res) => {
    if (req.body) {
        let code
        do {
            code = [...Array(4)].reduce(out => `${ out }${ arrayLetters[Math.floor(Math.random() * arrayLetters.length)]}`, "").toUpperCase()
        } while (games.find(x => x.code === code))
        let newGame = {code: code, channel: `client-a51cab9aff9db0953aa8-${code}`, players: []}
        games.push(newGame)
        res.json(newGame)
    }
});


redButtonRoute.post("/join", (req, res) => {
    if (req.body) {
        let game = games.find(x => x.code === req.body.code)
        console.log(req.body)
        if(req.body.code && req.body.playerName && games.find(x => x.code === req.body.code)) 
        {
            let game = games.find(x => x.code === req.body.code)
            let indexGame = games.findIndex(x => x.game === req.body.code)
            let newPlayer = {id: parseInt(game.players.length + 1), playerName: req.body.playerName, avatar: '', locked:false}
            game.players.push(newPlayer)
            console.log(newPlayer)
            games.splice(indexGame, 1, game)
            let channel = `${req.body.code}-join`
            console.log(channel)
            channels_client.trigger('private-channel-manco', channel , newPlayer)
            res.json(game)
        } else {
            res.sendStatus(400)
        }
    }
})

redButtonRoute.post("/check", (req, res) => {
    console.log(req.body)
    if (req.body) {
        if(req.body.code && games.find(x => x.code === req.body.code)) 
        {
            let game = games.find(x => x.code === req.body.code)
            res.json(game)
        } else {
            res.sendStatus(400)
        }
    }
})

redButtonRoute.post("/lock", (req, res) => {
    if (req.body) {
        if(req.body.code && req.body.id && games.find(x => x.code === req.body.code)) 
        {
            let game = games.find(x => x.code === req.body.code)
            let indexPlayer = game.players.findIndex(player => player.id === req.body.id)
            let indexGame = games.findIndex(x => x.code === req.body.code)
            games[indexGame].players[indexPlayer].locked = true
            games[indexGame].players[indexPlayer].avatar = req.body.avatar
            let channel = `${req.body.code}-lock`
            channels_client.trigger('private-channel-manco', channel , games[indexGame].players[indexPlayer], function(error) {
                console.log('console.log error: ', error)
                res.json(games[indexGame].players[indexPlayer])
            })
            console.log(games[indexGame].players[indexPlayer])
           
        } else {
            res.sendStatus(400)
        }
    }
})

export default redButtonRoute;
