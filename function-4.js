// ### Task-4

// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// *** answer***

function count_zero(binary_string) {
  let zero_count = 0;
  for (let i = 0; i < binary_string.length; i++) {
    if (binary_string[i] === "0") {
      zero_count++;
    }
  }
  return zero_count;
}
const binaryStr = "1010100010";
const count = count_zero(binaryStr);
console.log("Number of 0's:", count);
