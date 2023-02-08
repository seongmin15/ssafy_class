const names = ["jony", "sylvie", "nana"];

// slice -> 원본 배열 손상 안시킴 slice(startIndex, endIndex - 1)
// const newNames = names.slice(1, 2);
// console.log(names);
// console.log(newNames); // ["sylvie"]

// splice -> 원본 배열 손상 시킴 splice(startIndex, size)
// const newNames = names.splice(1, 2);
// console.log(names);
// console.log(newNames); // ["sylvie", "nana"]

const newNames = (name) => {
  if (names.indexOf(name) === -1) return names;
  else {
    names.splice(names.indexOf(name), 1);`  
    `
    return names;
  }
}

console.log(newNames("sylvie"));
console.log(names);