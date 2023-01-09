const { default: expect } = require("expect");
const Engineer = require("../lib/Engineer")
const engineer = new Engineer('nametest',"idtest","emailtest@email.com","githubtest");
 
  test("Test setting name of a engineer", () => {
  expect(engineer.name).toBe('nametest')
  });
  
  
  test("Test setting id of an engineer", () => {
   expect(engineer.id).toBe('idtest')
  });
  
  test("Test setting email of a engineer", () => {
    expect(engineer.email).toBe('emailtest@email.com')
  });
  test("Test setting the github of the erngineer",() =>{
    expect(engineer.github).toBe("githubtest")
  });
  
  test("Test get name method", () => {
 expect(engineer.getname()).toBe('nametest')
  });
  
  
  test(" Test get id method", () => {
    expect(engineer.getid()).toBe('idtest')
  });
  
  test("Test get email method", () => {
    expect(engineer.getemail()).toBe('emailtest@email.com')
  });
 test("test getrole method",() =>{
    expect(engineer.getGithub()).toBe('githubtest')
 });
  
  test("Test get role method", () => {
    expect(engineer.getRole()).toBe('Engineer')
  });
  