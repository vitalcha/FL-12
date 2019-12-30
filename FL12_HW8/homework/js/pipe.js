function pipe(number, ...functions) {
  for (let func of [...functions]) {
    number = func(number);
  }
  return number;
}

function addOne(x) {
  return x + 1;
}
pipe(1, addOne);