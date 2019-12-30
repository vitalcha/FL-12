const isBigger = (a, b) => a > b;
const isSmaller = (a, b) => !isBigger(a, b) && a !== b;

isSmaller();