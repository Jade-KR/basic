const calculator = require('../calculator.js');

describe('calculator', () => {
    let cal;
    beforeEach(() => {
        cal = new calculator();
    })
    it('init with 0', () => {
        expect(cal.value).toBe(0);
    });

    it('set with 2', () => {
        cal.set(2);
        expect(cal.value).toBe(2);
    });

    it('number clear', () => {
        cal.clear();
        expect(cal.value).toBe(0);
    });

    it('add number', () => {
        cal.add(100);
        expect(cal.value).toBe(100);
    });

    it('substract number', () => {
        cal.subtract(50);
        expect(cal.value).toBe(-50);
    });

    it('multiply number', () => {
        cal.set(2);
        cal.multiply(2);
        expect(cal.value).toBe(4);
    });

    it('divide number', () => {
        cal.set(100);
        cal.divide(4);
        expect(cal.value).toBe(25);
    })
})
