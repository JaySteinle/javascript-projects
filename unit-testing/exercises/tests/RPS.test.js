const playRPS = require('../RPS');

describe("RPS", function() {
  test("placeholder test", function() {
    expect(true).toBe(true);
  });

  test('should return the correct winner for Rock-Paper-Scissors', () => {
    const result = playRPS('rock', 'scissors');
    expect(result).toBe('Player 1 wins!');
  });

  test("if either player picks invalid choice. It should return 'Invalid input'", () => {
    const result = playRPS('papr', 'rok');
    expect(result).toBe('Invalid input');
  });
});