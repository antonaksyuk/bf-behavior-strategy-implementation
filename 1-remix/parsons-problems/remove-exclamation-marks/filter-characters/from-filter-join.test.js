/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c5857682a32d000154e5ef */

/* this exercise has 2 distractors */

/**
 * remoove exlamation mark from string
 *
 * @param {string} - string which includes exlamation mark
 *
 * @return {string} - returne string without exlamation mark
 */

function removeExclamationMarks(s) {
    const result = Array.from(s).filter((element) => {
        return element !== '!';
    });
    return result.join('');
}

// element !== '!'; // distractor
// const result = s.filter((element) => { // distractor

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
