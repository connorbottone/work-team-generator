const { default: expect } = require("expect");
const Employee = require("../lib/Employee")
const employee = new Employee('nametest',"idtest","emailtest@email.com");

  
  // This will test setting name of an employee
  test("Test setting name of an employee", () => {
  expect(employee.name).toBe('nametest')
  });
  
  // This will test setting id of an employee
  test("Test setting id of an employee", () => {
   expect(employee.id).toBe('idtest')
  });
  
  // This will Test setting email of an employee
  test("Test setting email of an employee", () => {
    expect(employee.email).toBe('emailtest@email.com')
  });
  
  // This will test get name method
  test("Test get name method", () => {
 expect(employee.getname()).toBe('nametest')
  });
  
  // This will test get id method
  test(" Test get id method", () => {
    expect(employee.getid()).toBe('idtest')
  });
  
  // This will test get email method
  test("Test get email method", () => {
    expect(employee.getemail()).toBe('emailtest@email.com')
  });
  
  // This will test get role method
  test("Test get role method", () => {
    expect(employee.getRole()).toBe('Employee')
  });
  