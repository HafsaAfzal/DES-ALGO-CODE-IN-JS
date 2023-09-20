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
function key16(string) {
    __16keys = [];
    function PC2(combine) {
        let keys = "";
        let pc2 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10,
            23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2,
            41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48,
            44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32]

        for (p = 0; p < pc2.length; p++) {
            let pc2Num = pc2[p];
            // console.log("pc-1",pcNum)
            for (s = 0; s < combine.length; s++) {

                incS = s + 1
                // console.log("index s=",s,"incs=",incS,"bit on s=",string[s])
                if (pc2Num == incS) {
                    bit = combine[s];
                    // console.log("bit", bit)
                    keys += bit;

                }
            }
        }
        console.log("keys", keys)
        __16keys.push(keys)
        // console.log(__16keys)
    }

    let bitstring = "";
    let pc1 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18,
        10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36,
        63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22,
        14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4]

    for (let p = 0; p < pc1.length; p++) {
        let pcNum = pc1[p];
        // console.log("pc-1",pcNum)
        for (let s = 0; s < string.length; s++) {

            let incS = s + 1
            // console.log("index s=",s,"incs=",incS,"bit on s=",string[s])
            if (pcNum == incS) {
                let bit = string[s];
                // console.log("bit", bit)
                bitstring += bit;

            }
        }
    }
    console.log("bit String=", bitstring, "length of bit string=", bitstring.length)
    // return bitstring


    function leftShift(c, d, k) {
        while (k <= 16) {
            console.log("value of k =", k)
            if (k == 1 || k == 2 || k == 9 || k == 16) {
                let c1 = c.slice(1);          //this function shift left by 1 bit
                let c2 = c.slice(0, 1);
                var c00 = c1 + c2
                console.log("c00 value=", c00)
                let d1 = d.slice(1);
                let d2 = d.slice(0, 1);
                var d00 = d1 + d2
                console.log("d00 value=", d00)

            }
            else {
                c1 = c.slice(2);
                c2 = c.slice(0, 2);
                c00 = c1 + c2
                console.log("coooo value=", c00)
                d1 = d.slice(2);
                d2 = d.slice(0, 2);
                d00 = d1 + d2
                console.log("dooooooooo value", d00)

                // return leftShift(c00, d00, k + 1)
            }
            let combine = c00 + d00;
            PC2(combine)
            c = c00;
            d = d00;
            k++;
        }
    }
    // [c0, d0] = leftShift(c0, d0);
    console.log("first 28 bits=",bitstring.slice(0, 28))
    console.log("remaing 28 bits=", bitstring.slice(28), 1)
    leftShift(bitstring.slice(0, 28), bitstring.slice(28), 1);
    // console.log("return value=", [c0, d0])

}
function encrypt(pt,arr){
    // let array=arr;
    let LB=pt.slice(0,32);
    let RB=pt.slice(32)
    for(let r=0;r<=arr.length;r++){
        let l0=LB;
        let L1=RB;
        let arrKey=arr[r]
        console.log("round key =",arrKey)
        
        function round(l1,arrKey){
            let eTable=[]
            
        }
    }
}

let binaryNum = [];
let key = "133457799BBCDFF1";
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

let ptInput="0124536ADCFEFBAE";

console.log(binaryNum, "total no of bits in array=length of array X each element length ", (binaryNum.length) * (binaryNum[0].length));
const key16Array = key16(binaryNum.join(""));
console.log(binaryNum.join(""))
// console.log(key16Array);
