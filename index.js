// Code your solution in this file

// array of drivers 

function findMatching(array, name) {
    return array.filter( function(driverName) {      
        // driverName is just the 'placeholder' name to see if the elements in array ...
        // matches the name / string parameter passed in 
        return driverName.toLowerCase() === name.toLowerCase();

    });
}

function fuzzyMatch(array, partialName) {

    return array.filter( function(name) {      
        return name.startsWith(partialName);
    });
}
function matchName(array, string) {
    // each element of array is an object, these objects have a property of name 
    // function needs to return each element whose name property matches provided string

    // we know that each object has a property name - so can use dot notation to access
    return array.filter( function(driverName) { 
        return driverName.name === string;
    });
}
