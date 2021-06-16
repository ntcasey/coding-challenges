function findDuplicates(arr1, arr2) {
  if (!arr1.length || !arr2.length) return [];

  let larger, smaller;
  if (arr1.length > arr2.length) {
    larger = arr1;
    smaller = arr2;
  } else {
    larger = arr2;
    smaller = arr1;
  }

  if (smaller.length * smaller.length <= larger.length) {
    // binary search appr
    let output = [];
    for (let num of smaller) {
      let found = binarySearch(larger, num);
      if (found) {
        output.push(num);
      }
    }
    return output;
  } else {
    // two pointers appr
    return twoPointers(arr1, arr2);
  }
}

/* if found return true, else return false */
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((end - start) / 2) + start;

    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] > target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}

function twoPointers(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  let output = [];
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      output.push(arr1[p1]);
      p1 += 1;
      p2 += 1;
    } else if (arr1[p1] > arr2[p2]) {
      p2 += 1;
    } else {
      p1 += 1;
    }
  }
  return output;
}

// p1                p2
// arr1 = [1, 2, 3, 5, 6, 7], arr2 = [3, 6, 7, 8, 20]

let arr1 = [1, 2, 3, 5, 6, 7];
let arr2 = [3, 6, 7, 8, 20];

findDuplicates(arr1, arr2);
