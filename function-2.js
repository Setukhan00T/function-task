// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// ***answer***

function multiplyNumber(number) {
    let sum=0;
  for (const num of number) {
    if (num % 2 !== 0) {
      sum = num * 2;
    } else {
      sum = num / 2;
    }
  }
  return sum;
}
const numbers = [3, 4, 5, 6, 8, 9, 2, 1];
const result = multiplyNumber(numbers);
console.log("final result :", result);
