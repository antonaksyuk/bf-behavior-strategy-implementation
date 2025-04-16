// #todo

/**
 *
 * @param {*} array
 * @returns
 */

export const isArrayOfNumbers = (array = []) => {
    return array.every((num) => typeof num === 'number' && !isNaN(num));
};
