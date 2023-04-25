import { maxPrice, isPalindrome, getMarks, getDividedByFive, getSubjects, getMiddleTaxes, Student, getRandomChinese, getPlanetData, createIdGenerator} from "./scripts/scripts.js";

console.log(`HW01: ${maxPrice}`);
console.log(`HW03: ${isPalindrome("madam")}`);
console.log(`HW04: ${getMarks(["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"], [4, 5, 5, 3, 4, 5])}`);
console.log(`HW05: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);
console.log(`HW06: ${getSubjects({
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
        }
    }, )}`);
console.log(`HW07: ${getMiddleTaxes.call({ tax: 0.25, middleSalary: 1586, vacancies: 3921 })}`);
let Ivan = new Student("Kharkiv", "2", "Ivan Bond")
console.log(`HW08: ${Ivan.getInfo()}`);
console.log(`HW11: ${getRandomChinese(3)}`);
console.log(`HW13: ${getPlanetData()}`);
console.log(`HW14: ${createIdGenerator()}`);


