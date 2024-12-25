// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("organization value is 'non-profit'", function(){
    expect(launchcode.organization).toBe('non-profit');
  });

  test("executiveDirector is 'Jeff'", function(){
    expect(launchcode.executiveDirector).toBe('Jeff');
  });

  test("percentageOfCoolEmployees is 100", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("programsOffered has 3 specfic courses, 'Web Development', 'Data Analysis', and ''LiftOff'", function(){
    expect(launchcode.programsOffered.length).toBe(3);
    expect(launchcode.programsOffered[0]).toBe('Web Development');
    expect(launchcode.programsOffered[1]).toBe('Data Analysis');
    expect(launchcode.programsOffered[2]).toBe('LiftOff');
  });

  test("launchOutput meets conditions", function(){
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!'); 
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
    expect(launchcode.launchOutput(2)).toBe('Launch');
    expect(launchcode.launchOutput(3)).toBe('Code!');
    expect(launchcode.launchOutput(5)).toBe('Rocks!');
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  });
  
  test("launchcode is an object", function(){
    expect(typeof launchcode).toEqual("object");
  });

  test("launchcode has an organization property", function(){
    expect(launchcode.organization).toBeDefined();
  });

  test("launchcode has an executiveDirector property", function(){
    expect(launchcode.executiveDirector).toBeDefined();
  });

  test("launchcode has a percentageCoolEmployees property", function() {
    expect(launchcode.percentageCoolEmployees).toBeDefined();
    });

  test("launchcode has a programsOffered property", function() {
    expect(launchcode.programsOffered).toBeDefined();
  });

  test("programsOffered is an array", function() {
    expect(Array.isArray(launchcode.programsOffered)).toEqual(true);
  });

  test("programsOffered has three elements", function() {
    expect(launchcode.programsOffered.length).toEqual(3);
  });

  test("programsOffered has 'Web Development' as the first element", function() {
    expect(launchcode.programsOffered[0]).toEqual('Web Development');
  });

  test("programsOffered has 'Data Analysis' as the second element", function() {
    expect(launchcode.programsOffered[1]).toEqual('Data Analysis');
  });

  test("programsOffered has 'LiftOff' as the third element", function() {
    expect(launchcode.programsOffered[2]).toEqual('LiftOff');
  });
  

  // Write your unit tests here!
  
});