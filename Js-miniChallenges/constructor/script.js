// const dateSnapshot = new Date()
// console.log(`Copyright ${dateSnapshot.getFullYear().toString()}`)


/*
Challenge:
1. Search online to find out how we can get just the year 
   using the Date() constructor and update the console.log above.
*/
function Gamer(name){
   this.name = name 
   this.score = 0
   this.incrementScore = function(){
      this.score++
   }
}

const dave  = new Gamer('Dave')
const sarah = new Gamer("sarah")
sarah.incrementScore()
console.log(dave);
console.log(sarah);
