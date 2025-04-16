/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5ad7d8162a7ead8112001f29 */

/* this exercise has 2 distractors */

function updateLight(current) {
    if (current === 'green') {
        return 'yellow';
    } else if (current === 'yellow') {
        return 'red';
    } else if (current === 'red') {
        return 'green';
    } else {
        return 'green';
    }
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
