const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id,email, officenumber){
        super(name,id,email)//inherits methods
        this.officenumber= officenumber;
    }
    getOfficenumber(){
        return this.officenumber
    }
getrole(){
    return "Manager"
}

}

module.exports = Manager;
