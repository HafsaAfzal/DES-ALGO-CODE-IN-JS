function divmod(numerator, denominator) {
    let quotient = Math.floor(numerator / denominator);
    let remainder = numerator % denominator;
    // bin += remainder.toString();
    bin.push(remainder);
    if (quotient === 0) {
        bin=(bin.reverse()).join("")
        binaryNum.push(bin.padStart(4, '0'));
        bin = []; // Reset the bin string for the next digit
        return;
    } else {
        divmod(quotient, 2);
    }
}

let binaryNum = [];
let key = "12345678";
let bin =[]; // Initialize bin outside the loop
for (let i = 0; i < key.length; i++) {
    // console.log(key[i]);
    divmod(Number(key[i]), 2);
}

console.log(binaryNum);
