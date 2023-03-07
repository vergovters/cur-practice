
let numberN;
let numberM;
let sum = 0;

while (!(Number.isInteger(numberN)) || numberN < 0) {
    numberN = +prompt("Enter the number N");
}



while (!(Number.isInteger(numberM)) || numberN >= numberM) {
    numberM = +prompt("Enter the number M");
}


const includePairedNum = confirm("Add paired numbers?")


for( i = numberN; i <= numberM; i++) {
    if(includePairedNum == true){
        sum = sum + i;
    }else {
        if(i % 2 == 0) continue
        sum = sum + i;
    }
    
}

const result = "Number N = " + numberN + "\nNumber M = " + numberM + "\nInclude paired numbers? " + includePairedNum + "\nResult = " + sum;
alert(result)


