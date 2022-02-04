/**
 * Array Challenge
 *
 * Have the function ArrayChallenge(arr) take the array of integers stored in arr,
 * and find the four largest elements and return their sum. For example:
 * if arr is [4, 5, -2, 3, 1, 2, 6, 6] then the four largest elements
 * in this array are 6, 6, 4, and 5 and the total sum of these numbers is 21,
 * so your program should return 21. If there are less than four numbers
 * in the array your program should return the sum of all the numbers in the array.
 *
 * Examples
 * Input: [1, 1, 1, -5]
 * Output: -2
 *
 * Input: [0, 0, 2, 3, 7, 1]
 * Output: 13
 */

function ArrayChallenge(arr) {
  let sortedArr = arr.sort(function (a, b) {
    return b - a;
  });
  let total = 0;

  if (sortedArr.length < 4) {
    for (index = 0; index < sortedArr.length; index++) {
      total += sortedArr[index];
    }
  } else {
    for (index = 0; index < 4; index++) {
      total += sortedArr[index];
    }
  }

  return total;
}

// keep this function call here
console.log(ArrayChallenge([1, 1, 1, -5]));
console.log(ArrayChallenge([0, 0, 2, 3, 7, 1]));
