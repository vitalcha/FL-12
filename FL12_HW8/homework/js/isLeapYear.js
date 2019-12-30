function isLeapYear(date) {
  let dateObj = new Date(date);

  if(dateObj.toString() === 'Invalid Date') {
      return 'Invalid Date';
  }
  
  dateObj.setMonth(1);
  dateObj.setDate(29);

  if(dateObj.getDate() === 1) {
      return dateObj.getFullYear() + ' is not a leap year';
  } else {
      return dateObj.getFullYear() + ' is a leap year';
  }
}
isLeapYear();
