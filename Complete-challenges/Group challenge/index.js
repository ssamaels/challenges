console.clear();

const array = [4, 3, 9, 7, 2, 1];
const excluded = [2, 3, 5, 7];
const output = [];

for (let i = 0; i < array.length; i++) {
  let element = array[i];
  if (excluded.indexOf(element) === -1) {
    output.push(element * 2);
  } else {
    output.push(element);
  }
}
// faster way:
// array.map((element) =>
//   excluded.indexOf(element) === -1
//     ? output.push(element * 2)
//     : output.push(element)
// );

console.log(output);
