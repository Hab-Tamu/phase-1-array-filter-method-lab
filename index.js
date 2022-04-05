// Code your solution here
const uberDrivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(collection, name){
    let newDriver = []
    for(let user of collection){
        if(user.toLowerCase() === name.toLowerCase()){
            newDriver.push(user)
        }
    }
    return newDriver
}
console.log(findMatching(uberDrivers, "Bobby"))


// //FUZZYMATCH FUCNTION

console.log("FUZZY MATCH")

const liftDrivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function fuzzyMatch(collection, initial){
   let liftDrivers = []
    for(const driver of collection){
    let first = driver.substring(0,2)
    if(first.toLowerCase() === initial.toLowerCase())
        { 
            
            liftDrivers.push(driver)
        }  
    } 
    return liftDrivers
 }

console.log(fuzzyMatch(liftDrivers, "Sa"))


console.log("========== Filterig the name of the drivers =======") 

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(collection, driverName){
    const newDriverList = []
    for(const driver of collection){
        if(driver.name === driverName){
            newDriverList.push(driver)
        }
    }
    return newDriverList
}
// // matchName(drivers, "Bobby" )
console.log(matchName(drivers, "Bobby" )) // {name: Bobby, hometown: Pitsburg} ...

