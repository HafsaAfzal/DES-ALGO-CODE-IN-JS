function alphaToNum(newkey) {
    let numKey = [];
    for (let a = 0; a < newkey.length; a++) {

        switch (newkey[a]) {
            case "A":
                numKey.push(10);
                break;
            case "B":
                numKey.push(11);
                break;
            case "C":
                numKey.push(12);
                break;
            case "D":
                numKey.push(13);
                break;
            case "E":
                numKey.push(14);
                break;
            case "F":
                numKey.push(15);
                break;
            case "G":
                numKey.push(16);
                break;
            case "H":
                numKey.push(17);
                break;
            case "I":
                numKey.push(18);
                break;
            case "J":
                numKey.push(19);
                break;
            default:
                numKey.push(newkey[a])
        }
    }
    return numKey;
}
function divmod(numerator, denominator) {
    let quotient = Math.floor(numerator / denominator);
    let remainder = numerator % denominator;
    // bin += remainder.toString();
    bin.push(remainder);
    if (quotient === 0) {
        bin = bin.reverse().join("");
        // console.log(bin)
        binaryNum.push(bin.padStart(4, '0'));
        bin = []; // Reset the bin string for the next digit
        return;
    } else {
        divmod(quotient, 2);
    }
}


let binaryNum = [];
let key = "12345678ABCDEFGH";
let newkey = []
console.log(newkey)
for (let k = 0; k < key.length; k++) {
    newkey.push(key[k]);
}
let newkey1 = alphaToNum(newkey);
console.log(newkey1)

let bin = []; // Initialize bin outside the loop
for (let i = 0; i < newkey1.length; i++) {
    // console.log(key[i]);
    divmod(Number(newkey1[i]), 2);
}

console.log(binaryNum, "total no of bits in array=length of array X each element length ", (binaryNum.length) * (binaryNum[0].length));

