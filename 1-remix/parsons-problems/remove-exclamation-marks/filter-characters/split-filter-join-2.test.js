/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/5cd2a41a7c59b20001be8dda */

/* this exercise has 3 distractors */

/**
 * remove exlamion mark
 * 
 * @param {string} - string which  includes exlamation mark
 * 
 * @return {string} - return string without exlamation mark
 */

let removeExclamationMarks = (s) =>
  s
    .split('')
    .filter((e) => e != '!')
    .join('');


// .split(''); // distractor
// .filter((e) => e != '!'); // distractor
// .join('') // distractor


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