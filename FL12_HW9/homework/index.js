// Task 1
function convert() {
  let results = [];
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      results.push(String(arguments[i]))
    } else if (typeof arguments[i] === 'string') {
      results.push(Number(arguments[i]))
    }
  }
  return results;
}
console.log(convert('1', 2, 3, '4'));

//Task 2
function executeforEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    fn(element, i, arr)
  }
}
executeforEach([1, 2, 3], function (el) {
  console.log(el * 2)
})

//Task 3
function mapArray(arr, callback) {
  let newArr = [];
  executeforEach(arr, function (element, i, arr) {
    newArr.push(callback(parseInt(element), i, arr));
  });
  return newArr;
}
console.log(mapArray([2, '5', 8], function (el) {
  return el + 3
}));

//Task 4
function filterArray(array, fn) {
  let result = [];
  executeforEach(array, e => {
    if (fn(e)) {
      result.push(e);
    }
  });

  return result;
}
console.log(filterArray([2, 5, 8], function (el) {
  return el % 2 === 0;
}));

//Task 5
function flipOver(string) {
  let backwardString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    backwardString += string[i];
  }
  return backwardString;
}
console.log(flipOver('hey world'));

//Task 6
function makeListFromRange(arr) {
  let newArr = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    newArr.push(i);
  }
  return newArr;
}

console.log(makeListFromRange([2, 7]));

//Task 7
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
function getArrayOfKeys(array, key) {
    let result = [];
    executeforEach(array, e => {
        result.push(e[key]);
    });

    return result;
}
console.log(getArrayOfKeys(actors, 'name'));

//Task 8
function substitute(arr) {
  let result = [];
  mapArray(arr, function (el) {
    if (el < 30) {
      result.push('*');
    } else {
      result.push(el);
    }
  });
  return result;
}
console.log(substitute([58, 14, 48, 2, 31, 29]));

//task 9
const date = new Date(2019, 0, 2);
function getPastDay(date, dayCount) {
  let copyDate = new Date(date);
  return copyDate.getDate(copyDate.setDate(copyDate.getDate() - dayCount));
}
console.log(getPastDay(date, 2));

//task 10
function formatDate(date) {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}
console.log(formatDate(new Date('6/15/2018 09:15:00')));

