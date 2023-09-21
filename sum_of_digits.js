function sumOfDigits(num) {
    const digitsArray = num.toString().split("");
    let sum = 0;
    digitsArray.forEach(digit => {
        sum += +digit;
    });
    return sum;
}

console.log(sumOfDigits(1222))