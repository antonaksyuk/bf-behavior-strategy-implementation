// #todo

'use strict';

/**
 * sums all numbery strings in an array of strings
 * returns 0 if the array is empty
 * it does not modify the original array (no side-effects)
 * @param {string[]} arr - the array of strings
 * @returns {number} the sum of all numbery strings
 */

// -------- your solutions --------

const mapFilterReduce = (arr) => {
    // these work, you need to pass them to the right array methods

    const isNotNaN = (entry) => !Number.isNaN(entry);
    const sumNumbers = (acc, next) => acc + next;
    const castToNumber = (entry) => Number(entry);

    const sumOfNumberies = arr
        .map(castToNumber)
        .filter(isNotNaN)
        .reduce(sumNumbers, 0);

    return sumOfNumberies;
};

// -------- your solutions --------

for (const solution of [mapFilterReduce]) {
    describe(solution.name + ': sums all numbery strings', () => {
        describe('correctly sums an array', () => {
            it('returns 0 for an empty array', () => {
                const actual = solution([]);
                expect(actual).toEqual(0);
            });
            it('sums numbers correctly', () => {
                const actual = solution(['1', '2', '3']);
                expect(actual).toEqual(6); // 1 + 2 + 3
            });
            it('ignores non-number strings', () => {
                const actual = solution(['1', 'e', '3']);
                expect(actual).toEqual(4); // 1 + 3
            });
            it('handles arrays with only non-number strings', () => {
                const actual = solution(['e', 'x']);
                expect(actual).toEqual(0); // нет чисел
            });
            it('handles arrays with mixed valid and invalid numbers', () => {
                const actual = solution(['1', '2', 'foo', '4']);
                expect(actual).toEqual(7); // 1 + 2 + 4
            });
        });
    });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arr is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arr contains non-strings"); } const c = a.map(a => +a).filter(a => !Number.isNaN(a)).reduce((a, b) => a + b, 0); return c }
