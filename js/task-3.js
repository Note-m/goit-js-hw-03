function filterArray(numbers, value) {
  let totalarray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      totalarray.push(numbers[i]);
    }
  }
  return totalarray;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
