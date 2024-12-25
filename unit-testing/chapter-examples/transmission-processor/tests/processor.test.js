const processor = require('../processor.js');

describe("transmission processor", function() {

  test("takes a string returns an object", function() {
    let result = processor("9701::<489584872710>");
    expect(typeof result).toBe("object");
  });

  test("returns -1 if '::' not found", function() {
    let result = processor("9701<489584872710>");
    expect(result).toBe(-1);
  });

  test("returns id in object", function() {
    let result = processor("9701::<489584872710>");
    expect(result.id).not.toBeUndefined();
  });

  test("converts id to a number", function() {
    let result = processor("9701::<489584872710>");
    expect(result.id).toBe(9701);
  });

  test("returns rawData in object", function() {
    let result = processor("9701::<489584872710>");
    expect(result.rawData).not.toBeUndefined();
  });

  test("returns -1 for rawData if missing '<' at position 0", function() {
    let result = processor("9701::489584872710>");
    expect(result.rawData).toBe(-1);
  });

  test("returns -1 for rawData if missing '>' at position -1", function() {
    let result = processor("9701::<489584872710");
    expect(result.rawData).toBe(-1);
  });

  test("returns correct rawData if both '<' and '>' are at correct positions", function() {
    let result = processor("9701::<489584872710>");
    expect(result.rawData).toBe("489584872710");
  });

  test("returns -1 if '<' is not at position 0", function() {
    let result = processor("9701::4872<97403495720912");
    expect(result.rawData).toBe(-1);
  });

  test("returns -1 if '>' is not at position -1", function() {
    let result = processor("9701::8729740349572>0912");
    expect(result.rawData).toBe(-1);
  });

  test("returns correct rawData if transmission has leading and trailing whitespace", function() {
    let result = processor("  9701::  <489584872710>  ");
    expect(result.rawData).toBe("489584872710");
  });

  test("return -1 if id is not a number", function() {
    let result = processor("9a701::<489584872710>");
    expect(result).toBe(-1);
  });

  test("returns -1 if more than 1 '::' is found", function() {
    let result = processor("9701::<489584872710>::");
    expect(result).toBe(-1);
  });

  test("returns rawData without enclosed '<' and '>'", function() {
    let result = processor("9701::<489584872710>");
    expect(result.rawData).toBe("489584872710");
  });

  test("returns -1 for the value of rawData if it contains anything but numbers", function() {
    let result = processor("9701::<489584872710a>");
    expect(result.rawData).toBe(-1);
  });

});