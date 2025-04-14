/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c61d06679fb30001ffe32f */

/* this exercise has 3 distractors */

/**
 * remoove exlamation mark
 * 
 * @param {string} - string which is contains exlamation mark(s)
 * 
 * @return {string} - string without exlamation marks
 */

function removeExclamationMarks(s) {
  var newString = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] != '!') {
      newString += s[i];
    }
  }
  return newString;
}

// newString = s[i]; // distractor
// return s; // distractor
// if (s[i] == '!') {
//   // distractor
// }

describe('remoove exlamation mark', () => {
  it('"hello!" => "hello"', () => {
    expect(removeExclamationMarks('hello!')).toEqual('hello');
  });
  it('" run!" => "run"', () => {
    expect(removeExclamationMarks('run!')).toEqual('run');
  });
  it('"he!llo" => "hello"', () => {
    expect(removeExclamationMarks('he!llo')).toEqual('hello');
  });
});
