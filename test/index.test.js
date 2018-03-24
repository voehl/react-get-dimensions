import getDimensions from '../src';

// TODO: measureHeight in eigenes modul auslagern
// TODO: measureHeight ohne dom rendering realisierbar?

describe('getDimensions()', () => {
    test('returns correct index', () => {
        const x = jest.fn();
        getDimensions(<asd/>, dimensions => {
            console.log('RESULT:', dimensions);
        });
        //expect(3).toBe(3);
    });
});