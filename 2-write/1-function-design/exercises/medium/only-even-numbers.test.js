// #todo

'use strict';

/**
 * removes all odd numbers from an array of numbers
 * does not modify the argument (no side-effects)
 * @param {number[]} arrayOfNumbers - the array of numbers to filter
 * @returns {number[]} an array with only even numbers
 */

// -------- your solutions --------

for (const solution of [secretSolution]) {
    describe(solution.name + ': removes odd numbers', () => {
        describe('correctly filters an array', () => {
            it('an empty array returns an empty array', () => {
                const actual = solution([]);
                expect(actual).toEqual([]);
            });
            it('keeps all entries when all are even', () => {
                const actual = solution([2, 4, 6]);
                expect(actual).toEqual([2, 4, 6]);
            });
            it('removes all odd numbers', () => {
                const actual = solution([1, 2, 3, 4]);
                expect(actual).toEqual([2, 4]);
            });
            it('removes only odd numbers', () => {
                const actual = solution([1, 2, 3, 4, 5, 6]);
                expect(actual).toEqual([2, 4, 6]);
            });
            it('does not modify the original array', () => {
                const input = [1, 2, 3, 4];
                const actual = solution(input);
                expect(input).toEqual([1, 2, 3, 4]);
                expect(actual).toEqual([2, 4]);
            });
        });
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfNumbers is not an array"); } const b = a.some(a => "number" != typeof a); if (b) { throw new TypeError("arrayOfNumbers does not contain only numbers"); } const c = a.filter(a => 0 == a % 2); return c }
