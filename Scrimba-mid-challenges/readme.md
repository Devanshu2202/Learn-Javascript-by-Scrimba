// function handleClick() {
//     fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// document.getElementById("new-deck").addEventListener("click", handleClick)

// function callback() {
//     console.log("I finally ran!")
// }

// setTimeout(callback, 2000)

// const people = [
//     { name: "Jack", hasPet: true },
//     { name: "Jill", hasPet: false },
//     { name: "Alice", hasPet: true },
//     { name: "Bob", hasPet: false },
// ]

// function gimmeThePets(number) {
//     return person.hasPet
// }

// const peopleWithPets = people.filter(gimmeThePets)
// console.log(peopleWithPets)


/**
 * Challenge: 
 * 
 * Write your own filter function! Don't worry about adding it to the prototype of arrays or anything.
 * This function should take 2 parameters:
 * 1. The array you want to filter through, and
 * 2. A callback function
 * 
 * Steps for filterArray function logic:
 * 1. Initialize a new, empty array which will be returned at the end of the filterArrays operations (Completed ✅)
 * 2. Loop through the array passed as the 1st parameter
 * 3. Inside the loop, call the callback function, passing the individual item you're currently looping over as the argument to your callback function
 * 4. If the callback function returns true, push the current item you're iterating on in the loop to the new array. If it returns false, don't push it to the array.
 * 5. When the loop is over, return the new array
 */

const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
]

function filterArray(array, callback) {
    const resultingArray = []

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            resultingArray.push(array[i])
        }
    }

    return resultingArray
}

function hasPet(person) {
    return person.hasPet
}

const peopleWithPets = filterArray(people, hasPet)

console.log(peopleWithPets)

/**
 * Challenge: method chaining!
 * 
 * 1. Select the button in the DOM and add an event listener to it without saving the DOM element as a separate variable. I.e. "chain" the addEventListener on after your getElementById()(When clicked, log "Clicked" to the console)
 *    - I realize this might feel like busywork, but my intent will make sense soon
 * 
 * 2. Given the array below, chain the .filter and .map array methods together to turn the array into an array of string email addresses of only the people in the array who voted. Log the array of email addresses to the console
 */

// document.getElementById("new-deck").addEventListener("click", function() {
//     console.log("Clicked!")
// })

const voters = [
    {name: "Joe", email: "joe@joe.com", voted: true},
    {name: "Jane", email: "jane@jane.com", voted: true},
    {name: "Bo", email: "bo@bo.com", voted: false},
    {name: "Bane", email: "bane@bane.com", voted: false}
]

// Write your code below

const filtered = voters.filter((voter)=> voter.voted === true )
console.log(filtered);

const result = filtered.map((item)=>{
    return item.email
})
console.log(result);




// Final result: ["joe@joe.com", "jane@jane.com"]

// function handleClick() {
//     fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// document.getElementById("new-deck").addEventListener("click", handleClick)

const promise = fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
const result = promise.then(res => res.json())

console.log(result);


/**
 * Mini challenge: Figure out what promise.then() returns! 
 * Save the result to a variable and log it to the console.
 */
    // .then(data => console.log(data))

    /**
 * Time to be curious!
 * 
 * What would happen if you didn't return res.json() 
 * from the first .then block?
 * 
 * What would the next .then() callback receive as its 
 * parameter if you returned something totally different??
 */

fetch("https://apis.scrimba.com/bored/api/activity")
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
      console.log(data);
        
    })
