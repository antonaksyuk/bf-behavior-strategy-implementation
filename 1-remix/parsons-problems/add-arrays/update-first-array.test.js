/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/5d6a8a05c968e80001066720 */

/* this exercise has 0 distractors */

/**
 * Add to first array second array
 *
 * @param {array} - [array1] - the first array
 * @param {array} - [array2] - the second array
 *
 * @return {array} - return added array1
 */

function addArrays(array1, array2) {
    var len = array1.length;

    if (len === array2.length) {
        for (var i = 0; i < len; i++) {
            array1[i] += array2[i];
        }

        return array1;
    }

    throw new Error();
}

describe('add array2 to array1', () => {
    it('[33, 44] [22, 55] => [55, 99]', () => {
        expect(addArrays([33, 44], [22, 55])).toEqual([55, 99]);
    });
    it('[11, 12] [52, 87] => [63, 99]', () => {
        expect(addArrays([11, 12], [52, 87]));
    });
});
