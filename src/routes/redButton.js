import { Router } from "express";
import channels_client from "../services/pusher"

const redButtonRoute = Router()
const games = []
const arrayLetters = ["A","B","C","D","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"]

redButtonRoute.post("/", (req, res) => {
  if (req.body) {
    
  }
});

redButtonRoute.post("/create", (req, res) => {
    if (req.body) {
        let code
        do {
            code = [...Array(4)].reduce(out => `${ out }${ arrayLetters[Math.floor(Math.random() * arrayLetters.length)]}`, "")
        } while (games.find(x => x.code === code))
        let newGame = {code: code, channel: `client-a51cab9aff9db0953aa8-${code}`, players: []}
        games.push(newGame)
        res.json(newGame)
    }
});


redButtonRoute.post("/join", (req, res) => {
    if (req.body) {
        if(req.body.code && req.body.playerName && games.find(x => x.code === req.body.code)) 
        {
            let game = games.find(x => x.code === req.body.code)
            let indexGame = games.findIndex(x => x.game === req.body.code)
            let newPlayer = {id: parseInt(game.players.length + 1), playerName: req.body.playerName, avatar: ''}
            game.players.push(newPlayer)
            console.log(newPlayer)
            games.splice(indexGame, 1, game)
            channels_client.trigger('my-channel', game.channel, newPlayer)
            res.json(game)
        } else {
            res.sendStatus(400)
        }
    }
});

export default redButtonRoute;
