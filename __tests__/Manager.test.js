const { default: expect } = require("expect");
const Manager = require("../lib/Manager")
const manager = new Manager('nametest',"idtest","emailtest@email.com","test123");

// Test instantiate Employee instance
test("", () => {
    // Instantiate the Employee class with new operator to create an object and assign it to an new variable
    // Expect the type of the variable to be the "object" data type
  });
  
  
  test("Test setting name of a manager", () => {
  expect(manager.name).toBe('nametest')
  });
  
  
  test("Test setting id of an manager", () => {
   expect(manager.id).toBe('idtest')
  });
  
  test("Test setting email of a manager", () => {
    expect(manager.email).toBe('emailtest@email.com')
  });
  test("Test setting the officenumber of manager",() =>{
    expect(manager.officenumber).toBe("test123")
  });
  
  test("Test get name method", () => {
 expect(manager.getname()).toBe('nametest')
  });
  
  
  test(" Test get id method", () => {
    expect(manager.getid()).toBe('idtest')
  });
  
  test("Test get email method", () => {
    expect(manager.getemail()).toBe('emailtest@email.com')
  });
 test("test getofficenumber method",() =>{
    expect(manager.getOfficenumber()).toBe('test123')
 });
  
  test("Test get role method", () => {
    expect(manager.getRole()).toBe('Manager')
  });