/* 2 extra lines */

/* parsons-collapse: recursion with base-case 0

  i'm using 0 as the base-case because that is the fewest possible repetitions
  zero repetitions is an empty string, so if repetitions is 0 it will return ''

  otherwise i'll need to combine the text with a string that has one fewer reptitions

  repeatString(text, repetitions) =>
    base-case: repetitions is 0
      return: an empty string
    recursive case: repetitions is greater than 0
      nextRepetitions = subtract one from repetitions
      recursedValue = recursively call repeatString with text and nextRepetitions
      return: text + recursedValue

*/

/**
 * repeat string
 *
 * @param {string} - [text=''] - string which is repeated
 * @param {number} - [repetitions=1] - the number of repetitions
 *
 * @return {string} - returne repeated string
 */

const repeatString = (text = '', repetitions = 1, repeated = '') => {
    if (repetitions === 0) {
        return repeated;
    } else {
        const nextRepeated = repeated + text;
        const nextRepetitions = repetitions - 1;
        return repeatString(text, nextRepetitions, nextRepeated);
    }
};

describe('repeat string', () => {
    it('"do" => "do", "do"', () => {
        expect(repeatString('do')).toEqual('do', 'do');
    });
    it('"hello" => "hello", "hello"', () => {
        expect(repeatString('hello')).toEqual('hello', 'hello');
    });
});
