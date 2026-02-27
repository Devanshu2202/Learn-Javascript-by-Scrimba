/*
Challenge:
Rebuild this constructor function as a class.
*/


function Character(name) {
    this.name = name
    this.collectedItemsArr = []
    this.addItem = function (item) {
        this.collectedItemsArr.push(item)
        console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
    }
}

const wizard = new Character('Merlin')
wizard.addItem('a wand')

class Gamer {
    constructor(name, score) {
        this.name = name
        this.score = score
    }
    
    incrementScore() {
        this.score++  
    }
}

const dave = new Gamer('Dave', 0)
const sarah = new Gamer('Sarah', 0)
dave.incrementScore()
console.log(dave)
console.log(sarah)