import { studentsArr } from './studentsArr.js'
import { itemsBoughtArr } from './itembroughtArr.js'

function calculateClassAverage(studentsArr) {
    const totalGrades = studentsArr.reduce((total, currentStudent) =>{
        return total + currentStudent.grade
    }, 0)
    return totalGrades / studentsArr.length
}

console.log(calculateClassAverage(studentsArr))


function calculateTotalCost(itemsBoughtArr){
/*
Challenge:
1. Use the reduce method to calculate the total 
   cost of items which have been bought.
*/
    const total = itemsBoughtArr.reduce((total, currentprice)=>{
        return total + currentprice.priceUSD
    },0)
    return total

    // console.log(total);
    
}

console.log(calculateTotalCost(itemsBoughtArr))