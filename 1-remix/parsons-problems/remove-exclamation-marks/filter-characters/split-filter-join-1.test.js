/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/58c58b7262f372bb330003a1 */

/* this exercise has 3 distractors */

/**
 * remove exlamion mark
 *
 * @param {string} - string which  includes exlamation mark
 *
 * @return {string} - return string without exlamation mark
 */

function removeExclamationMarks(s) {
    var arr = s.split('');
    arr = arr.filter(function (item) {
        return item !== '!';
    });
    return arr.join('');
}

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

// arr.filter(function (e) { // distractor
// var arr = s.join(''); // distractor
// return arr.split(''); // distractor
