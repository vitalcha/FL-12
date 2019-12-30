function makeNumber(str) {
  let num = '';

  for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i]) || parseInt(str[i]) === 0) {
      num += str[i];
    }
  }

  return num;
}

makeNumber();