/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5aeadb48a8d2b32b8a0024e6 */

/* this exercise has 1 distractor */

const updateLight = (current) => {
    const next = {
        green: 'yellow',
        yellow: 'red',
        red: 'green',
    };
    return next[current] || 'green';
};

describe('updateLight function', () => {
    it('should return the next traffic light color correctly', () => {
        expect(updateLight('green')).toEqual('yellow');
        expect(updateLight('yellow')).toEqual('red');
        expect(updateLight('red')).toEqual('green');
    });

    it('should handle edge cases like unknown input gracefully', () => {
        // Assuming the function defaults to 'green' for any unknown input
        expect(updateLight('purple')).toEqual('green');
        expect(updateLight('blue')).toEqual('green');
    });
});
