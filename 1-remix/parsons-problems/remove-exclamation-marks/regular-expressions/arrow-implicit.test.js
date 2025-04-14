/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/57f9488b2faf02e74c000536 */

/* this exercise has 3 distractors */

/**
 * remove exlamion mark
 *
 * @param {string} - string which  includes exlamation mark
 *
 * @return {string} - return string without exlamation mark
 */

let removeExclamationMarks = (s) => s.replace(/!/g, '');

// let removeExclamationMarks = function(s) { s.replace(/!/g, ''); } // distractor
// let removeExclamationMarks = (s) => { s.replace(/!/g, ''); } // distractor
// let removeExclamationMarks => (s) = s.replace(/!/g, ''); // distractor

describe('Remove exlamation mark', () => {
  it('"hello!" => "hello"', () => {
    expect(removeExclamationMarks('hello!')).toEqual('hello');
  });
  it('"!hello!" => "hello"', () => {
    expect(removeExclamationMarks('!hello!')).toEqual('hello');
  });
  it('"do!do7" => "dodo7"', () => {
    expect(removeExclamationMarks('do!do7')).toEqual('dodo7');
  });
});
