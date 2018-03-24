import React from 'react';
import getDimensions from '../src';

describe('getDimensions()', () => {
    test('result has expected properties', () => {
        getDimensions(<div/>, dimensions => {
            expect(dimensions.width).toBe(0);
            expect(dimensions.height).toBe(0);
        });
    });

    test('number of childNodes is zero', () => {
        expect(document.body.childNodes.length).toBe(0);
        getDimensions(<div/>, dimensions => {
            expect(document.body.childNodes.length).toBe(0);
        });
    });
});