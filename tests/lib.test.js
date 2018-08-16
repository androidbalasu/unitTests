const lib = require('../lib');

//Use describe to group a bunch of related tests.
describe('absolute', ()=>{
    it ('should return positive number if input is positive', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });
    
    it ('should return positive number if input is negative', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });
    
    it ('should return zero if input is zero', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });
});

describe('greet', () => {
    it('should return the greeting message', () =>{
        const result = lib.greet('Prash');
        expect(result).toMatch(/Prash/);
        expect(result).toContain('Prash');
        })
});

describe('getCurrencies', () => {
    it('should return supported currencies', ()=>{
        const result = lib.getCurrencies();

    // expect(result).toContain('USD');
    // expect(result).toContain('AUD');
    // expect(result).toContain('EUR');

    //Ideal way
    expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']));
    })
});

describe('getProduct', ()=>{
    it('should return the product with the given id', ()=>{
        const result = lib.getProduct(1);
        //expect(result).toEqual({ id: 1, price: 10 });
        //expect(result).toMatchObject({ id: 1, price: 10 });
        expect(result).toHaveProperty('id', 1);
    })
});

describe('register', ()=> {
    it('should throw if username is falsy', () => {
        expect(()=>{lib.registerUser(null);}).toThrow();
    })
});
