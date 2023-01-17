// const arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];

// function Count(arr){
//   let count = 0;
//   for (let i = 0; i < arr.length; i++)
//   {
//     if (arr[i] === 1) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(Count(arr));

const arr = ['A', 'E', 'W', 'Q', 'A'];

function isAexcist(arr){
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] === 'A') {
      return 'O';
    }
  }
  return 'X';
}

console.log(isAexcist(arr));