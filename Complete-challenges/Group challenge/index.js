console.clear();

const array = [4, 3, 9, 7, 2, 1];
const excluded = [2, 3, 5, 7];
const output = [];

// for (let i = 0; i < excluded.length; i++);
for (let i = 0; i < array.length; i++) {
  if (array[i] === excluded[i]) {
    // output.push(excluded[i]);
    output.push(array[i]);
  } else {
    output.push(array[i] * 2);
  }
}

console.log(output);
