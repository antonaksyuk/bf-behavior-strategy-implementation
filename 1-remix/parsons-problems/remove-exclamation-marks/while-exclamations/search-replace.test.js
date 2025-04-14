/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/5e5ed30f4013f00001a33813 */

/* this exercise has 2 distractors */

  /**
   * remove exlamion mark
   *
   * @param {string} - string which  includes exlamation mark
   *
   * @return {string} - return string without exlamation mark
   */

function removeExclamationMarks(s) {
  while (s.search('!') >= 0) {
    s = s.replace('!', '');
  }
  return s;
}

// s = s.replace('', '!'); // distractor
// while (s.search('!') > 0) { // distractor
// while (s.search('!') !== 0) { // distractor

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