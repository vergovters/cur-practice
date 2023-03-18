const getRandomArray = (length, min, max) => {
    const newArray = [];
    for(let i = 0; i<length; i++){
        const random = Math.floor(Math.random() * (max - min) + min);
        newArray.push(random);
    } 

    return newArray;
}

const getAverage = (...numbers) => {
    if (numbers.length === 0) {
        return 0;
    }
    
    let sum = 0;
    let counter = 0;
    
    for(let i = 0; i < numbers.length; i++) {
        if(notIncluded(numbers[i])) {
            sum += numbers[i];
            counter++;
        }
    }
    
    return sum/counter;
}


const getMedian = (...numbers) => {
    let median;
    let sortedArray = numbers.sort((a,b) => a - b);
    for(let i = 0; i < numbers.length; i++){
        if(notIncluded(numbers[i])) {
            numbers.sort((a,b) => a - b);
            numbers.length % 2 ? median = sortedArray[Math.floor(numbers.length / 2)] : 
                median = (sortedArray[sortedArray.length / 2] + sortedArray[sortedArray.length / 2 - 1]) / 2;
        }
    }
    
    return median;
}

const filterEvenNumbers = (...numbers) => {
    const filtered = numbers.filter((number) => {
        return number % 2
    }) 

    return filtered
}

const countPositiveNumbers = (...numbers) => {
    const filtered = numbers.filter((number) => {
        return number > 0
    }) 
    
    return filtered
}


const getDividedByFive = (...numbers) => {
    const filtered = numbers.filter((number) => {
        return number % 5 == 0
    }) 
    
    return filtered
}



const badWords = ["fuck", "shit"];
const replaceBadWords = (string) => {
  const newArray = string.split(" ");
  const result = newArray.map((word) => {
    for (i = 0; i < badWords.length; i++) {
      if (word.toLowerCase().includes(badWords[i])) {
        word = word.toLowerCase().replaceAll(badWords[i], "*".repeat(badWords[i].length));
      }
    }
    return word;
  });
  return result.join(" ");
}

/*
const divideByThree = (word) => {
    let result;
    if(word.length <= 3){
        return result = word;
    } else {
        array = word.toLowerCase().split("")
        for(let i = 0; i<word.length; i++){
            arr.slice(3)
        }
        
        return result
    }
}*/


function generateCombinations(word) {
    let result = [];
    if (word.length === 1) {
      result.push(word);
      return result;
    } else if( word.length > 10){
        console.log("Ur word is too long!")
    }else {
      for (let i = 0; i < word.length; i++) {
        let firstChar = word[i];
        let charsLeft = word.substring(0, i) + word.substring(i + 1);
        let innerCombinations = generateCombinations(charsLeft);
        for (let j = 0; j < innerCombinations.length; j++) {
          result.push(firstChar + innerCombinations[j]);
        }
      }
      return result;
    }
}

const notIncluded = (number) => {
    if(typeof number === 'number' && Number.isInteger(number)){
        return number
    }
}




console.log(getRandomArray(15, 1, 100))
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))
console.log(getMedian(1, 2, 3, 4))
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6))
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6))
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))
console.log(replaceBadWords("Holy shit!"))
console.log(generateCombinations("man"))