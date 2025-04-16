/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/60743965cb7e980001c7bc44 */

/* this exercise has 2 distractors */

function updateLight(current) {
    const lights = ['green', 'yellow', 'red'];

    return current === 'red' ? 'green' : lights[lights.indexOf(current) + 1];
}

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
