class Student{
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

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);

        setInterval(() => {this.getScholarship();}, 30000);
    }

    getScholarship() {
        if (!this.dismissed && this.getAverageMark() >= 4) {
            console.log(`Ви отримали 1400 грн. стипендії`);
        } else {
            console.log(`Ви не можете отримати стипендію`);
        }
    }
}

let Ivan = new Student("Kharkiv", "2", "Ivan Bond")

let Boris = new BudgetStudent("Kyiv", "3", "Boris Tkach")



console.log(Ivan.getInfo());

Ivan.dismiss();

Ivan.marks = 5
console.log(Ivan.marksArr)

console.log(Ivan.getAverageMark())



console.log(Boris.getInfo());
