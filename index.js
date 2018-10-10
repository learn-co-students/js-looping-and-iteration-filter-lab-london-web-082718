// Code your solution in this file
//


// long version
// function findMatching(array, name) {
//   let newName = name.toLowerCase()
//   const result = array.filter(item => item.toLowerCase() == newName);
//   return result;
// }

// re-factored as an arrow function!
const findMatching = (array, name) =>
  array.filter(item => item.toLowerCase() == name.toLowerCase());

function fuzzyMatch(array, string) {
  return array.filter(item => item.slice(0, string.length) == string)
}

function matchName(array, string) {
  return array.filter(item => item.name == string);
}
