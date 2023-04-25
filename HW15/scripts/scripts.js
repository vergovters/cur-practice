const Banana = 15.678;
const Apple = 123.965;
const Orange = 90.2345;


export const maxPrice = Math.max(Banana, Apple, Orange);

export const isPalindrome = (word) => {
    const reversedWord = word.split("").reverse().join("");
  
    return word == reversedWord;
}

export const getMarks = (students, marks) => {
    let studentsMarks = [];
    for(let i = 0; i < students.length; i++){
        studentsMarks[i] = [students[i] + " " + marks[i]]
    }

    return studentsMarks;
}

export const getDividedByFive = (...numbers) => {
    const filtered = numbers.filter((number) => {
        return number % 5 == 0
    }) 
    
    return filtered
}

export const getSubjects = (student) => {
    let studentSubjects = [];
    for(let key in student.subjects){
        key = (key.charAt(0).toUpperCase() + key.slice(1)).replace(/_/g, " ");
        studentSubjects.push(key)
    }
    
    return studentSubjects
}

export function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}

export class Student{
    constructor(university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marksArr = [5, 4, 4, 5];
        this.dismissed = false;
    }

    getInfo(){
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`
    }


    getAverageMark(){
        if(!this.dismissed){
            let sum = this.marksArr.reduce((total, item) => total + item);

            return sum/this.marks.length;
        }

        else return null
    }

    dismiss() {
        this.dismissed = true;
        this.marksArr = null;
        console.log(`You dismissed ${this.fullName}`)
    }

    recover() {
        this.dismissed = false;
        this.marksArr = this.marksArr;

    }

    get marks(){
        if (this.dismissed) {
            return null
        }

        return this.marksArr;
    }

    set marks(newMark){
       if(!this.dismissed){
        this.marksArr.push(newMark)       
       }
    }

}

export function getRandomChinese(length) {
    new Promise((resolve, reject) => {
      let сhineseResult = '';
      let counter = 0;
      if(length<0){
        reject('Error!');
      }
      while (counter < length) {
        const sign = Date.now().toString().slice(-5);
        counter++;
        setTimeout(function() {
            сhineseResult += String.fromCharCode(sign);
          if (сhineseResult.length === length) {
            resolve(сhineseResult);
          }}, 50 * counter);
      }
    }).then((сhineseResult) => console.log(сhineseResult))
    .catch((error) => {console.error(error)});

}

export async function getPlanetData(){
    await fetch('https://swapi.dev/api/planets/')
        .then(response => response.json())
        .then(data => {
            const planets = data.results;
            planets.forEach(planet => console.log(planet.name));
  });
}

export function* createIdGenerator(){
    let value = 1;
    while(true){
        yield value++;
    }
}