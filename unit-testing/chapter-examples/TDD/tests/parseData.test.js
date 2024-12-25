const parse = require('../parse-numbers');

describe("parse numbers", function(){

   test("returns array when passed comma separated list of numbers", () => {
      let items = parse("5,8,0,17,6,4,9,3", ",");
      expect(Array.isArray(items)).toBe(true);
   });

});