/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/57f94b0a2faf02e74c000557 */

/* this exercise has 3 distractors */

/**
 * remove exlamion mark
 *
 * @param {string} - string which  includes exlamation mark
 *
 * @return {string} - return string without exlamation mark
 */

function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}

// var function removeExclamationMarks(s) { // distractor
// s.replace(/!/gi, ''); // distractor
// function removeExclamationMarks(s) => { // distractor

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
