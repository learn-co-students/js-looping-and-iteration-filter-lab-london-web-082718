// Code your solution in this file
function findMatching(driverArray, nameString){
    drivers = driverArray.filter(n => n.toLowerCase() === nameString.toLowerCase())
    return drivers
}
    
function fuzzyMatch(driverArray, nameString){

    drivers = driverArray.filter(n => n.slice(0, nameString.length) === nameString )
    return drivers
}


function matchName(driverArray, nameString){
    drivers = driverArray.filter(n => n.name === nameString )
    return drivers
}