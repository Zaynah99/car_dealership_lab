const Car = require('../car');//imports 

let car; //declaring object 

beforeEach(() => {
    audi = new Car ("Audi", 35.000, "3.0L")
    mcLaren = new Car ("McLaren", 500.000, "4.0L")


})

// AUDI OBJECT

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

//SETTERS

test ('can set manufacturer', () => {
    audi.manufacturer = "Mercedes Benz"
    expect(audi.manufacturer).toBe("Mercedes Benz")

});

test ('can set price', () => {
    audi.price = 40.000
    expect(audi.price).toBe(40.000)
})

test('can set engine size', () => {
    audi.engine = "3.5L"
    expect(audi.engine).toBe("3.5L")
})


//MCLAREN 


test ('has name', () => {
    // Arrange - do any initial setup
    const expected = "McLaren"
    // Assert - check it worked the way we expect
    expect(mcLaren.manufacturer).toBe(expected);

});

test('has a price', () => {
    const expected = 500.000
    expect(mcLaren.price).toBe(500.000)

});

test ('has engine size', () => {
    const expected = "4.0L"
    expect(mcLaren.engine).toBe(expected);

});

//SETTERS

test ('can set manufacturer', () => {
    mcLaren.manufacturer = "BMW"
    expect(mcLaren.manufacturer).toBe("BMW")

});

test ('can set price', () => {  
    mcLaren.price = 450.000
    expect(mcLaren.price).toBe(450.000)
})

test('can set engine size', () => {
    mcLaren.engine = "5L"
    expect(mcLaren.engine).toBe("5L")
})