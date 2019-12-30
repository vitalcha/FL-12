function countNumber(something) {
  let number = '';
  for (let i in something) {
    if (parseInt(something[i])) {
      number = number + something[i];
    }
  }
  let count = {};
  for (let i = 0; i < number.length; i++) {
    let a = number[i];
    if (count[a] !== undefined) {
      ++count[a];
    } else {
      count[a] = 1;
    }
  }
  return count;
}
countNumber();