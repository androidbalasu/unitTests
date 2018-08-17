const lib = require('../lib');
const exercise1 = require('../exercise1');
const db = require('../db');
const mail = require('../mail');

// //Use describe to group a bunch of related tests.
// describe('absolute', ()=>{
//     it ('should return positive number if input is positive', () => {
//         const result = lib.absolute(1);
//         expect(result).toBe(1);
//     });
    
//     it ('should return positive number if input is negative', () => {
//         const result = lib.absolute(-1);
//         expect(result).toBe(1);
//     });
    
//     it ('should return zero if input is zero', () => {
//         const result = lib.absolute(0);
//         expect(result).toBe(0);
//     });
// });

// describe('greet', () => {
//     it('should return the greeting message', () =>{
//         const result = lib.greet('Prash');
//         expect(result).toMatch(/Prash/);
//         expect(result).toContain('Prash');
//         })
// });

// describe('getCurrencies', () => {
//     it('should return supported currencies', ()=>{
//         const result = lib.getCurrencies();

//     // expect(result).toContain('USD');
//     // expect(result).toContain('AUD');
//     // expect(result).toContain('EUR');

//     //Ideal way
//     expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']));
//     })
// });

// describe('getProduct', ()=>{
//     it('should return the product with the given id', ()=>{
//         const result = lib.getProduct(1);
//         //expect(result).toEqual({ id: 1, price: 10 });
//         //expect(result).toMatchObject({ id: 1, price: 10 });
//         expect(result).toHaveProperty('id', 1);
//     })
// });

// describe('registerUser', ()=> {
//     it('should throw if username is falsy', () => {

//         const args = [null, undefined, NaN, '', 0 , false];
//         args.forEach( a=> {
//             expect(()=>{lib.registerUser(a);}).toThrow();
//         });
//     });

//     it('should return a user object if  valid user name is passed', () => {
//         const result = lib.registerUser('Prash');
//         expect(result).toMatchObject({username: 'Prash'});
//         expect(result.id).toBeGreaterThan(0);
//     });
// });


// describe('TestFizzBuzz', () =>{
//     //Throw exception if input is not a number\falsy
//     it('should throw if input number is NaN\\null\\undefined', ()=>{
//         const args = [null, undefined, '', {},false];
//         args.forEach( a=> {
//             expect(()=>{exercise1.fizzBuzz(a);}).toThrow();
//         });
//     })

//     //
//     it ('should return \'Fizzbuzz\' if number is divisible by 3 and 5', () => {
//         const result = exercise1.fizzBuzz(15);
//         expect(result).toBe('FizzBuzz');
//     })

//     it ('should return \'Fizz\' if number is divisible only by 3', () => {
//         const result = exercise1.fizzBuzz(3);
//         expect(result).toBe('Fizz');
//     })

//     it ('should return \'Buzz\' if number is divisible only by 5', () => {
//         const result = exercise1.fizzBuzz(5);
//         expect(result).toBe('Buzz');
//     })

//     it ('should return input if number is not divisible by 3 or 5', () => {
//         const result = exercise1.fizzBuzz(1);
//         expect(result).toBe(1);
//     })

// });

// describe('applyDiscount', () =>{
//     it('should apply 10% discount if customer has more than 10 points', ()=>{
//         db.getCustomerSync = function(customerId){
//             console.log('Fake reading customer...')
//             return {id: customerId, points: 20};
//         }
//         const order = {customerId: 1, totalPrice: 10};
//         lib.applyDiscount(order);
//         expect(order.totalPrice).toBe(9);
//     });
// });


describe('notifyCustomer', () => {
    it('should send an email to the customer', () =>{
        db.getCustomerSync = function (customerId){
            console.log('Faking customer id..')
            return {email: 'a', }
        }

        let mailSent = false;
        mail.send= function(email, message){
            mailSent = true;
        }

        lib.notifyCustomer({customerId: 1})

        expect(mailSent).toBe(true);
    });
});
