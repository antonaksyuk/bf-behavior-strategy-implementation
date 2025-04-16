/* 3 extra lines */

/* parsons-collapse: iterating until the new string's length is correct

  repeatString(text, repetitions) =>
    1. calculate the final length for the new string
    2. create a new string to fill with many text's
    3. iterate as long as the new string is too short
      a. check if the new string is long enough
        stop if it is, keep going if it is not
      b. append text to the new
      c. repeat
    return: the new repeated string

*/

/**
 * repeat string
 *
 * @param {string} - [text=''] - string which is repeated
 * @param {number} - [repetitions=1] - the number of repetitions
 *
 * @return {string} - returne repeated string
 */

const repeatString = (text = '', repetitions = 1) => {
    const finalLength = text.length * repetitions;
    let repeatedText = '';
    while (repeatedText.length < finalLength) {
        repeatedText += text;
    }
    return repeatedText;
};

// while (repeatedText.length <= finalLength) { // distractor
// repeatedText + text; // distractor
// const repeatedText = ''; // distractor

describe('repeat string', () => {
    it('"do" => "do", "do"', () => {
        expect(repeatString('do')).toEqual('do', 'do');
    });
    it('"hello" => "hello", "hello"', () => {
        expect(repeatString('hello')).toEqual('hello', 'hello');
    });
});
