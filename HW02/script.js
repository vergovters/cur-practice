
let numberN = 0;
let numberM = 0;
let sum = 0;

while (true) {
    numberN = +prompt("Enter the number N");
    if(!(Number.isInteger(numberN))) {
        alert("N donsn't fit")
    }else{
        break
    }
}



while (true) {
    numberM = +prompt("Enter the number M");
    if(!(Number.isInteger(numberM)) ) {
        alert("M donsn't fit")
    }else if(numberM<numberN){
        alert("M donsn't fit")
    } else{
        break
    }
}


let includePairedNum;

while (true) {
    includePairedNum = prompt("Include paired numbers?(yes/no)");
    if(includePairedNum === "yes") {
        break
    }
    else if(includePairedNum === "no" ){
        break
    }
    else{
        console.log(includePairedNum);
        alert("Answer doesn't fit")
    }
}


switch(includePairedNum) {
    case "yes":
        for( i = numberN; i <= numberM; i++) {
            sum = sum + i;
          }
        break
    case "no":
        console.log("no")
        for( i = numberN; i <= numberM; i++) {
            if(i % 2 == 0) continue
            sum = sum + i;
          }
        break
}

const result = "Number N = " + numberN + "\nNumber M = " + numberM + "\nInclude paired numbers? " + includePairedNum + "\nResult = " + sum;
alert(result)



