let quotes = ['It’s not a bug. It’s an undocumented feature!', 'Software Developer – An organism that turns caffeine into software','A user interface is like a joke. If you have to explain it, it’s not that good.', 'I’m very font of you because you are just my type.','Things aren’t always #000000 and #FFFFFF'
]
const snark = (req,res, next)=>{
  console.log(quotes[Math.floor(Math.random()*quotes.length)])
  next()
}

module.exports = snark