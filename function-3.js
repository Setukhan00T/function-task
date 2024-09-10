// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// *** answer***

function make_avg(number) {
  let sum = 0;
  for (i = 0; i < number.length; i++) {
    sum += number[i];
  }
  return sum / number.length;
}
const numbers = [1, 2, 3, 4, 5];
const average = make_avg(numbers);
console.log("average: ", average);
