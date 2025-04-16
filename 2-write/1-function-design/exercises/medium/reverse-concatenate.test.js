// #todo

'use strict';

/**
 * A function that takes an array of strings, reverses it, and combines the strings
 * it does not modify the original array
 * @param {string[]} arrayOfStrings - an array of strings to concatenate, in reverse order
 * @returns {string} - the array elements joined together, in reverse order
 */

// -------- your solutions --------

for (const solution of [secretSolution]) {
    describe(solution.name + ': reverses and combines strings', () => {
        describe('correctly handles the array of strings', () => {
            it('returns an empty string when the array is empty', () => {
                const actual = solution([]);
                expect(actual).toEqual('');
            });
            it('returns the combined string in reverse order', () => {
                const actual = solution(['hello', 'world']);
                expect(actual).toEqual('worldhello');
            });
            it('does not modify the original array', () => {
                const input = ['hello', 'world'];
                const actual = solution(input);
                expect(input).toEqual(['hello', 'world']);
                expect(actual).toEqual('worldhello');
            });
            it('works with a single string in the array', () => {
                const actual = solution(['test']);
                expect(actual).toEqual('test');
            });
            it('works with more than two strings', () => {
                const actual = solution(['a', 'b', 'c']);
                expect(actual).toEqual('cba');
            });
        });
    });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings does not contain only strings"); } return [...a].reverse().reduce((a, b) => a + b, "") }
