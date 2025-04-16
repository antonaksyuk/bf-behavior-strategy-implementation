/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/60c649d3408198000190aec2 */

/**
 * add two arrays
 *
 * @param {array} - [a1=[]] - the first array
 * aparam {array} - [a2=[]] - the second array
 * return {array} - the added arrays
 */

function addArrays(a1 = [], a2 = []) {
    if (a1.length !== a2.length) throw new Error();
    return a1.map((v, i) => v + a2[i]);
}

describe('add two arrays', () => {
    it('[1, 2] [2, 3] => [3, 5]', () => {
        expect(addArrays([1, 2], [2, 3])).toEqual([3, 5]);
    });
    it('[15, 15] [30, 34] => [45, 49]', () => {
        expect(addArrays([15, 15], [30, 34])).toEqual([45, 49]);
    });
    it('[3, 6, 8] [4, 5, 6] => [7, 11, 14]', () => {
        expect(addArrays([3, 6, 8], [4, 5, 6])).toEqual([7, 11, 14]);
    });
});
