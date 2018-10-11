function findMatching(drivers, name){
    return drivers.filter(function (driverName){
        return driverName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(drivers, letter){
    letterLength = letter.length
    return drivers.filter(function (beginsWith){
        return beginsWith.toLowerCase().slice(0, letterLength) === letter.toLowerCase();
    });
}

function matchName(drivers, name){
    return drivers.filter(function(nameMatch){
        return nameMatch.name.toLowerCase() === name.toLowerCase();
    });
}