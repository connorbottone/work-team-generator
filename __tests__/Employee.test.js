// Import Employee class with require()
const Employee = require("../lib/Employee")
const employee = new Employee('nametest',"idtest","emailtest@email.com");

// Test instantiate Employee instance
test("", () => {
    // Instantiate the Employee class with new operator to create an object and assign it to an new variable
    // Expect the type of the variable to be the "object" data type
  });
  
  // Test setting name of an employee
  test("Test setting name of an employee", () => {
  expect(employee.name).toBe('nametest')
  });
  
  // Test setting id of an employee
  test("Test setting id of an employee", () => {
   expect(employee.id).toBe('idtest')
  });
  
  // Test setting email of an employee
  test("Test setting email of an employee", () => {
    expect(employee.email).toBe('emailtest@email.com')
  });
  
  // Test get name method
  test("Test get name method", () => {
 expect(employee.getname()).toBe('nametest')
  });
  
  // Test get id method
  test(" Test get id method", () => {
    expect(employee.getid()).toBe('idtest')
  });
  
  // Test get email method
  test("Test get email method", () => {
    expect(employee.getemail()).toBe('emailtest@email.com')
  });
  
  // Test get role method
  test("Test get role method", () => {
    expect(employee.getRole()).toBe('Employee')
  });
  