const checkFive = require('../checkFive');

describe("checkFive", function()  {
  test("checkFive(3) should return '3 is less than 5.'", function() {
    //let result = checkFive(3);
    expect(checkFive(3)).toBe('3 is less than 5.');
  });

  test("checkFive(5) should return '5 is equal to 5.'", () => {
    expect(checkFive(5)).toBe('5 is equal to 5.');
  });

  test("checkFive(8) should return '8 is greater than 5.'", () => {
    expect(checkFive(8)).toBe('8 is greater than 5.');
  });

  test("checkFive(0) should return '0 is less than 5.'", () => {
    expect(checkFive(0)).toBe('0 is less than 5.');
  });

  test("checkFive(-2) should return '-2 is less than 5.'", () => {
    expect(checkFive(-2)).toBe('-2 is less than 5.');
  });
});
//test('checkFive', () => {
