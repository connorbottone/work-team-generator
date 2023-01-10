//employee had 3 input peramiters that wil be extended to all sub classes that extend off employee since this is our main.
class Employee {
    constructor(name, id , email ){
        this.name = name;
        this.id= id;
        this.email=email;
    }
    //functions to retrun values set
    getname(){
        return this.name
    };
    getid(){
        return this.id
    };
    getemail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
    }
    //exports employye so we can require elsewhere
    module.exports = Employee;