const Employee = require("./Employee");
//using super to requier peramiters form employee
class Engineer extends Employee {
    constructor(name,id,email, github){
        super(name, id, email)
        this.github=github
    }
getGithub(){
    return this.github
}
getRole(){
    return "Engineer"
}

}

module.exports = Engineer;
