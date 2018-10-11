function findMatching(collection, name) {
    return collection.filter(function (driverName) {
        return driverName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(collection, name) { 
    let nameLength = name.length;
    return collection.filter(function (driverName) {
        return driverName.slice(0, nameLength) === name;
    });
}

function matchName(collection, name) {
    return collection.filter(function (driverName) {
       return driverName.name.toLowerCase() === name.toLowerCase();
     });
 }