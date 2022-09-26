class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback.`)
    }
}

class Instructor extends TeamMember {
    designation = 'Web Course Instructor'
    team = 'Web Team'
    constructor(name, location) {
        super(name, location);
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`)
    }
}

class Developer extends TeamMember {
    designation = 'Web Course Instructor'
    team = 'Web Team'
    tech;
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    developeFeature(feature) {
        console.log(`please develope the feature ${feature}`)
    }
    release(version) {
        console.log(`please release the version ${version}`)
    }
}

class JobPlacement extends TeamMember {
    designation = 'Job Placement Comandos'
    team = 'Job Placement'
    region;
    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`)
    }
}

const abdullah = new Developer('Abdullah Al Mamoon', 'Bogura', 'React');
// console.log(abdullah);
abdullah.developeFeature('Home Button');
abdullah.release(0.2022);
abdullah.provideFeedback();

const jhankar = new JobPlacement('Jhankar Mahbub', 'Dhaka', 'Bangladesh');
console.log(jhankar);