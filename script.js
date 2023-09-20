function alphaToNum(nuw) {
    let numKey = [];
    for (let a = 0; a < nuw.length; a++) {

        switch (nuw[a]) {
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
                numKey.push(nuw[a])
        }
    }
    return numKey;
}
function Binary(newkey1) {
    let BinaryNum = [];
    let bin = []; // Initialize bin outside the loop
    for (let i = 0; i < newkey1.length; i++) {
        // console.log(key[i]);
        divmod(Number(newkey1[i]), 2);
    }
    function divmod(numerator, denominator) {

        let quotient = Math.floor(numerator / denominator);
        let remainder = numerator % denominator;
        // bin += remainder.toString();
        bin.push(remainder);
        if (quotient === 0) {
            bin = bin.reverse().join("");
            // console.log(bin)
            BinaryNum.push(bin.padStart(4, '0'));
            bin = []; // Reset the bin string for the next digit
            return;
        } else {
            divmod(quotient, 2);
        }
    }
    return BinaryNum;
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
    console.log("first 28 bits=", bitstring.slice(0, 28))
    console.log("remaing 28 bits=", bitstring.slice(28), 1)
    leftShift(bitstring.slice(0, 28), bitstring.slice(28), 1);
    // console.log("return value=", [c0, d0])
    return __16keys
}
function IP(string) {
    let Bitstring = "";
    let ipTable = [58, 50, 42, 34, 26, 18, 10, 2,
        60, 52, 44, 36, 28, 20, 12, 4,
        62, 54, 46, 38, 30, 22, 14, 6,
        64, 56, 48, 40, 32, 24, 16, 8,
        57, 49, 41, 33, 25, 17, 9, 1,
        59, 51, 43, 35, 27, 19, 11, 3,
        61, 53, 45, 37, 29, 21, 13, 5,
        63, 55, 47, 39, 31, 23, 15, 7]

    for (let p = 0; p < ipTable.length; p++) {
        let ipNum = ipTable[p];
        for (let s = 0; s < string.length; s++) {

            let incS = s + 1
            // console.log("index s=",s,"incs=",incS,"bit on s=",string[s])
            if (ipNum == incS) {
                let bit = string[s];
                // console.log("bit", bit)
                Bitstring += bit;

            }
        }
    }
    console.log("bit String=", Bitstring, "length of bit string=", Bitstring.length)
    return Bitstring
}
function encrypt(ptBits, arr) {
    let LB = ptBits.slice(0, 32);
    let RB = ptBits.slice(32)
    for (let r = 0; r < arr.length; r++) {
        console.log(arr[r])
        let l0 = LB;
        let R1 = RB;
        let arrKey = arr[r]
        console.log("round key =", arrKey,"length of key",arrKey.length)
        round(R1, l0, arrKey)
        function round(R1, l0, arrKey) {
            let eBits = ""
            let eTable = [32, 1, 2, 3, 4, 5, 4, 5,
                6, 7, 8, 9, 8, 9, 10, 11,
                12, 13, 12, 13, 14, 15, 16, 17,
                16, 17, 18, 19, 20, 21, 20, 21,
                22, 23, 24, 25, 24, 25, 26, 27,
                28, 29, 28, 29, 30, 31, 32, 1];
            for (let e = 0; e < eTable.length; e++) {
                let eNum = eTable[e];
                for (let s = 0; s < R1.length; s++) {

                    let incS = s + 1
                    // console.log("index s=",s,"incs=",incS,"bit on s=",string[s])
                    if (eNum == incS) {
                        let bit = R1[s];
                        // console.log("bit", bit)
                        eBits += bit;

                    }
                }
            }
            console.log(" e bits=",eBits)
           
            zor(eBits,l0,arrKey)

            // xor function 
            function zor(t,l0,f){
                let xor="";
                for(e=0;e<t.length;e++){
                        if(t[e]===f[e]){
                            xor+=1
                        }
                        else{
                            xor+=0
                        }
                }
                console.log(xor)
            }

        }
    }
}


// console.log(binaryNum, "total no of bits in array=length of array X each element length ", (binaryNum.length) * (binaryNum[0].length));
// const key16Array = key16(binaryNum.join(""));
// console.log(binaryNum.join(""))
// // console.log(binaryNum.join(""))
// // console.log(key16Array);

let key = "12345678ABCDEFAA"
let keyNum = alphaToNum(key);
let binaryNum = Binary(keyNum);
console.log(binaryNum, "total no of bits in array=length of array X each element length ", (binaryNum.length) * (binaryNum[0].length));
const key16Array = key16(binaryNum.join(""));
console.log(binaryNum.join(""))
console.log("16 keys array=",key16Array)

let pt = "ABCDEFCDABCDEFAA"
let ptNum = alphaToNum(pt);
console.log(ptNum)

let ptBinary = Binary(ptNum);
console.log(ptBinary)
let ipBits = IP(ptBinary)
let encryptedText = encrypt(ipBits, key16Array)


