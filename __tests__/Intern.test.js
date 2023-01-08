const { default: expect } = require("expect");
const Intern = require("../lib/Intern")
const intern = new Intern('nametest',"idtest","emailtest@email.com","schooltest");
 
  test("Test setting name of a intern", () => {
  expect(intern.name).toBe('nametest')
  });
  
  
  test("Test setting id of an intern", () => {
   expect(intern.id).toBe('idtest')
  });
  
  test("Test setting email of a intern", () => {
    expect(intern.email).toBe('emailtest@email.com')
  });
  test("Test setting the shcool of the intern",() =>{
    expect(intern.school).toBe("schooltest")
  });
  
  test("Test get name method", () => {
 expect(intern.getname()).toBe('nametest')
  });
  
  
  test(" Test get id method", () => {
    expect(intern.getid()).toBe('idtest')
  });
  
  test("Test get email method", () => {
    expect(intern.getemail()).toBe('emailtest@email.com')
  });
 test("test getrole method",() =>{
    expect(intern.getSchool()).toBe('schooltest')
 });
  
  test("Test get role method", () => {
    expect(intern.getRole()).toBe('Intern')
  });