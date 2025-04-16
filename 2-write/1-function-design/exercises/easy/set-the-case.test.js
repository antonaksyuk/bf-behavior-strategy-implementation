// #todo

'use strict';

/**
 * sets all the characters in a string to upper or lower case
 * @param {string} [text=''] - the text to casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the text in all lower or upper case
 */

// -------- your solutions --------

for (const solution of [secretSolution]) {
    describe(solution.name + ': sets a text to lower or upper case', () => {
        describe("the function's default parameters", () => {
            it('second parameter defaults to true', () => {
                expect(solution('ASDF')).toEqual('asdf');
            });
            it('first parameter defaults to an empty string', () => {
                expect(solution()).toEqual('');
            });
        });

        describe('when set to lower case', () => {
            it('returns "" when input is empty', () => {
                expect(solution('', true)).toEqual('');
            });
            it('converts all uppercase to lowercase', () => {
                expect(solution('HELLO', true)).toEqual('hello');
            });
            it('leaves lowercase unchanged', () => {
                expect(solution('world', true)).toEqual('world');
            });
            it('converts mixed case to lowercase', () => {
                expect(solution('HeLLo', true)).toEqual('hello');
            });
            it('preserves punctuation', () => {
                expect(solution('Hi!', true)).toEqual('hi!');
            });
            it('preserves numbers', () => {
                expect(solution('A1B2', true)).toEqual('a1b2');
            });
        });

        describe('when set to upper case', () => {
            it('returns "" when input is empty', () => {
                expect(solution('', false)).toEqual('');
            });
            it('leaves uppercase unchanged', () => {
                expect(solution('HELLO', false)).toEqual('HELLO');
            });
            it('converts lowercase to uppercase', () => {
                expect(solution('world', false)).toEqual('WORLD');
            });
            it('converts mixed case to uppercase', () => {
                expect(solution('HeLLo', false)).toEqual('HELLO');
            });
            it('preserves punctuation', () => {
                expect(solution('Hi!', false)).toEqual('HI!');
            });
            it('preserves numbers', () => {
                expect(solution('a1b2', false)).toEqual('A1B2');
            });
        });
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }
