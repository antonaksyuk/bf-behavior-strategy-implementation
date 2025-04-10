/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/607972557b9a3d0001e17286 */

/**
 * add two arrays
 * 
 * @param {array} - [arr1=[]] the first array
 * @param {array} - [arr2=[]] the second array
 * 
 * @return {array} return added arrays
 */

const addArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) throw 'Error';
    return arr1.map((_, i) => arr1[i] + arr2[i]);
};

describe('add two arrays', () => {
  it('[3, 5] [7, 7] => [10, 12]', ()=> {
    expect(addArrays([3, 5], [7, 7])).toEqual([10, 12]);
  });
  it('[98, 9] [45, 65] => [143, 74]', ()=>{
    expect(addArrays([98, 9], [45, 65])).toEqual([143, 74]);
  })
})
