function isLeapYear(date) {
    let year = new Date(date).getFullYear();
    if (year) {
        return new Date(year, 1, 29).getDate() === 29 ?
            `${year} is a leap year` : `${year} is not a leap year`;
    } else {
        return 'Invalid Date';
    }
}

isLeapYear();
