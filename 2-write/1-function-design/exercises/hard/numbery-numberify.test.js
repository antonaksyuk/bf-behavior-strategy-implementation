// #todo

'use strict';

/**
 * takes an array of strings and returns a new array of numbers
 *  the new array contains all the numbery strings, cast to numbers
 * does not modify the argument (no side-effects)
 * @param {string[]} arrayOfStrings - the array of strings
 * @returns {number[]} an array containing only numbers, and not NaN
 * @example
 *  ['1', '2', 'e', '.'] // --> [1, 2]
 */

// -------- your solutions --------

for (const solution of [secretSolution]) {
    describe(
        solution.name + ': converts an array of strings to numbers',
        () => {
            describe('when the array contains valid number strings', () => {
                it('should return an array with converted numbers', () => {
                    const actual = solution(['1', '2', '3']);
                    expect(actual).toEqual([1, 2, 3]);
                });
            });

            describe('when the array contains invalid number strings', () => {
                it('should return an array without NaN values', () => {
                    const actual = solution(['1', 'a', '2', '.']);
                    expect(actual).toEqual([1, 2]);
                });
            });

            describe('when the array contains only non-numeric strings', () => {
                it('should return an empty array', () => {
                    const actual = solution(['a', 'b', 'c']);
                    expect(actual).toEqual([]);
                });
            });

            describe('when the array contains mixed valid and invalid strings', () => {
                it('should return only valid number strings as numbers', () => {
                    const actual = solution(['1', 'invalid', '2', '3.5']);
                    expect(actual).toEqual([1, 2, 3.5]);
                });
            });

            describe('when the array is empty', () => {
                it('should return an empty array', () => {
                    const actual = solution([]);
                    expect(actual).toEqual([]);
                });
            });

            describe('when the input is not an array', () => {
                it('should throw an error', () => {
                    expect(() => solution('string')).toThrowError(TypeError);
                });
            });
        },
    );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings contains non-strings"); } const c = a.map(a => +a), d = c.filter(a => !Number.isNaN(a)); return d }
