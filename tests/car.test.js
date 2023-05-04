const Car = require('../car');//imports 

let car; //declaring object 
beforeEach(() => {
    audi = new Car ("Audi", 35.000, "3.0L")
    mcLaren = new Car ("McLaren", 500.000, "4.0L")


})

test ('has name', () => {
    // Arrange - do any initial setup
    const expected = "Audi"
    // Assert - check it worked the way we expect
    expect(audi.manufacturer).toBe(expected);

});

test('has a price', () => {
    const expected = 35.000
    expect(audi.price).toBe(35.000)

});

test ('has engine size', () => {
    const expected = "3.0L"
    expect(audi.engine).toBe(expected);

});

test ('change manufacturer', () => {
    audi.manufacturer = "Mercedes Benz"
    expect(audi.manufacturer).toBe("Mercedes Benz")

});

test ()