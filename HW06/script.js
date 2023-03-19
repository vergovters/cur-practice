const students = [
    {
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
        }
    }, 
    {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
        }
    },
    {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
        }
    }
];


const getSubjects = (student) => {
    let studentSubjects = [];
    for(let key in student.subjects){
        key = (key.charAt(0).toUpperCase() + key.slice(1)).replace(/_/g, " ");
        studentSubjects.push(key)
    }
    
    return studentSubjects
}

const getAverageMark = (student) => {
    let matrixOfMarks = Object.values(student.subjects)
    let sum = 0;
    let counter = 0;
    for (let i = 0; i < matrixOfMarks.length; i++) {
        for (let j = 0; j < matrixOfMarks[i].length; j++) {
          sum += matrixOfMarks[i][j];
          counter++ ;
        }
      }

    return (sum/counter).toFixed(2);
}

const getStudentInfo = (student) => {
    return `Курс ${student.course}, Ім'я ${student.name}, Середня оцінка ${getAverageMark(student)}`
}

const getStudentsName = (group) => {
    let names = [];
    for(let key in group){
        names.push(group[key].name)
    }

    return names.sort((a, b) => a.localeCompare(b));
}


const getBestStudent = (group) => {
    let averageMarks = []
    group.forEach(function(object) {
        averageMarks.push(getAverageMark(object))
    });

    return Math.max(...averageMarks);
}


const calculateWordLetters = (word) => {
    const letterCount = {};
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (letterCount[letter]) {
        letterCount[letter]++;
      } else {
        letterCount[letter] = 1;
      }
    }

    return letterCount;
}

console.log(getSubjects(students[0]))
console.log(getAverageMark(students[0]))
console.log(getStudentInfo(students[0]))
console.log(getStudentsName(students))
console.log(getBestStudent(students))
console.log(calculateWordLetters("test"))