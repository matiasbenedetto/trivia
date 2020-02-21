import { operate } from './utils';

describe('operate function', () => {
    it('adds to a base number', () => {
        const output = operate(10, '+', 5);
        expect(output).toBe(15);
    });

    it('substracts from base number', () => {
        const output = operate(10, '-', 5);
        expect(output).toBe(5);
    });

    it('multiplies base number', () => {
        const output = operate(10, '*', 5);
        expect(output).toBe(50);
    });

    it('divides base number', () => {
        const output = operate(10, '/', 5);
        expect(output).toBe(2);
    });
});
