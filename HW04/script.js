const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій",
"Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів",
"Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];


const makePairs = (students) => {
    let boys = [];
    let girls = [];
    students.forEach(student => {
        if(student === "Олександр"  || student  === "Ігор" || student === "Олексій") {
            boys.push(student);
        }else {
            girls.push(student)
        }
    }) 
        
    let pairs = [];

    for(let i = 0; i < boys.length; i++){
        pairs[i] = [boys[i], girls[i]];
      }

    return pairs;
}


const addTask = (pair, theme) => {
    let pairTheme = [];
    for(let i = 0; i < pair.length; i++) {
        pairTheme[i] = [pair[i], theme[i]]
    }

    return pairTheme;
}

const getMarks = (students, marks) => {
    let studentsMarks = [];
    for(let i = 0; i < students.length; i++){
        studentsMarks[i] = [students[i], marks[i]]
    }

    return studentsMarks;
}

/*
const getAllMarks = (groups) => {

    let result = [];
    
    
    for(let i = 0; i < groups.length; i++){
        let randomMark  = Math.floor(Math.random() * 5)
        let currentGroup = groups[i];
        result[i] = [currentGroup, randomMark]
    }

    return result
}*/


const getAllMarks = (groups) => {

    let result = [];
    
    
  for(let group of groups){
    let randomMark  = Math.floor(Math.random() * 5);
    group.push(randomMark);
    result.push(group)
  }

    return result
}

console.log(addTask(makePairs(students), themes));
console.log(getMarks(students, marks))
console.log(getAllMarks(addTask(makePairs(students), themes)))
