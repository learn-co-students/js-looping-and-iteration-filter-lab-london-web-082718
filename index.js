function findMatching(drivers, name) {
  return drivers.filter(a => a.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(a => a.slice(0, letters.length) === letters)
}

function matchName(drivers,name) {
  return drivers.filter(a => a.name === name)
}