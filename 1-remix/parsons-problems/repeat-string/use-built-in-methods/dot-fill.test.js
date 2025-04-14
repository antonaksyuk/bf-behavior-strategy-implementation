/* 3 extra lines */

/* parsons-collapse: use built-in .js methods

  repeatString(text, repetitions) =>
    1. make sure the data is the correct type and format for the method you're using
    2. use the method
    return: the result

*/

/**
 * repeat string
 * 
 * @param {string} - [text=''] - string which is repeated
 * @param {number} - [repetitions=1] - the number of repetitions
 * 
 * @return {string} - returne repeated string
 */

const repeatString = (text = '', repetitions = 1) => {
    const oneEntryPerRepetition = Array(repetitions).fill(text);
    const repeatedString = oneEntryPerRepetition.join('');
    return repeatedString;
};

describe('repeat string', ()=>{
  it('"do" => "do", "do"', ()=>{
    expect(repeatString('do')).toEqual('do','do');
  });
  it('"hello" => "hello", "hello"', ()=>{
    expect(repeatString('hello')).toEqual("hello", "hello");
  });
})