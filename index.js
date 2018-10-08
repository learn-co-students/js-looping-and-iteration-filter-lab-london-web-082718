// Code your solution in this file


function findMatching (drivers, name) {
	const newArray = drivers.filter(driver => { 
        return driver.toLowerCase() === name.toLowerCase()
    })
    return newArray;
}; 


function fuzzyMatch (drivers, str) {
	const newArray = drivers.filter(driver => { 
        return driver.startsWith(str)
    })
    return newArray;
}; 

function matchName (drivers, name) {
    const newArray = drivers.filter(driver => {
        return driver['name'] === name;
    })
    return newArray; 
} 

