// // for/of loop is mainly used for iterating without index 
// // The JavaScript for of statement loops through the values of an iterable object.

// // It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists,

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
console.log(text);

var satisfiesConditions = function (grid) {
  let i = 0;
  let g = grid
  for (let j = 1; j < g[0].length; j++) {
      if (
          g[i][j - 1] == g[i][j]
      ) return false
  }

  let s = new Set(g.map(e => e.join('')))
  if (s.size > 1) return false
  return true
};