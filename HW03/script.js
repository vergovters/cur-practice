const getMaxDigit = (number) => {
    let max = 0;
    const numberString = number.toString();
    
    for (let i = 0; i < numberString.length; i++) {
      const currentDigit = parseInt(numberString[i]);
      if (currentDigit > max) {
        max = currentDigit;
      }
    }
    
    return max;
  }
  

  const formatName = (name) => {
    let newName = '';
    name = name.toLowerCase();
  
    for (let i = 0; i < name.length; i++) {
      if (i == 0) {
        newName += name[i].toUpperCase();
      } else {
        newName += name[i];
      }
    }
  
    return newName;
  }


const gerRandomPass = (length = 8) => {
  let pass = "";
  for(let i = 0; i < length; i++){
    pass += Math.floor(Math.random() * 10);
  }

  return pass;
}

const getRandomIntInRange = (n, m) => {
    if (n > m) {
      console.log("N > M")
    } else {
        return Math.floor(Math.random() * (m - n + 1)) + n;
    }
}

const deleteLetters = (letter, string) => {
  let newString = "";
  for(let i = 0; i<string.length; i++){
    if(string[i] == letter) {
      continue
    } else {
      newString += string[i];
    }
  }

  return newString
}

const isPalindrome = (word) => {
  const reversedWord = word.split("").reverse().join("");

  return word == reversedWord;
}


 console.log(getMaxDigit(8746464)) 
 console.log(formatName("iLLia")) 
 console.log(gerRandomPass())
 console.log(getRandomIntInRange(25, 100))
 console.log(deleteLetters("a", "aawedwd"))
 console.log(isPalindrome("мадам"))