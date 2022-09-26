// syntactic sugar
class Instructor {
    name;
    designation = 'Web Course Instructor'
    team = 'Web Team'
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`)
    }
}
const amir = new Instructor('amir', 'mumbai');
console.log(amir);
amir.startSupportSession('9.00');
amir.createQuiz(59);

const mamoon = new Instructor('Mamoon', 'Bogura');
console.log(mamoon);