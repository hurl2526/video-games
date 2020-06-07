const express = require('express')
const router = express.Router();
const videoGames = require('../models/games')
// const uuid = require('uuidv4');
//above line is causing an error

//getAllGames
router.get('/',(req, res)=>{
  if (videoGames.length !==0){
    return res.status(404).json({confirmation: 'success',videoGames})
  }
  res.status(200).json({confirmation: 'fail',message: 'no games found'})
})

//getOneGame
router.get('/:id', (req,res)=>{

  const game = videoGames.filter((game)=>game.id === req.params.id)

  if(game.length === 0){
    return res.status(404).json({confirmation:'failed', message: 'game not found'})
  }
  res.status(200).json({confirmation: 'success', game})
  return res.send(req.params.id)
});

//createGame
router.post('/', (req,res)=>{
if(!req.body.name || !req.body.description){
  return res.status(400).json({confirmation: 'failed', message: 'You must fill in all inputs'})
}

const game = videoGames.filter((game)=>
  game.name === req.body.name)

  if(name.length > 0){
    return res.status(400).json({confirmation: 'fail', message: 'Game exists'})
  }
  else {



 let newGame = {};
  //  newGame.id = uuid()
   newGame.name = req.body.name
   newGame.description = req.body.description
   newGame.yearReleased = req.body.yearReleased
   newGame.playTime = req.body.playTime 
   videoGames.push(newGame)

   return res.status(201).json({message: 'Game Created', videoGames})
  }
});

//updateGame

router.put('/:id', (req, res) => {
  //find the game
  let game = videoGames.filter((game) => game.id === req.params.id);
  let updatedGame = req.body;
  if (game.length > 0) {
    //loop through game array and change the game that matches the id
    videoGames.forEach((game) => {
      console.log(game.id, req.params.id);
      if (game.id === req.params.id) {
        game.name = updatedGame.name ? updatedGame.name : game.name;
        game.description = updatedGame.description ? updatedGame.description : game.description;
        game.yearReleased = updatedGame.yearReleased ? updatedGame.yearReleased : game.yearReleased;
        game.playTime = updatedGame.playTime ? updatedGame.playTime : game.playTime;
      }
    });
  }
  // return the updated games
  return res.status(201).json({ message: 'Game Updated', videoGames });
});

//deleteGame

router.delete('/:id', (req, res)=> {
  const newGame = videoGames.filter(game=>game.id !== req.params.id)
  return res.status(200).json({message: 'game deleted',newGame})
})




module.exports = router;