
//IMPORTS
const Dealership = require ('../dealership')
const Car = require ('../car')

let dealership; //declaring object 
let porsche;

beforeEach(() => {
    dealership = new Dealership("RS Motors", 25);
    porsche = new Car("Porsche", 100.000, "3.0L");
})

test('can add stock', () => {
    dealership.addStock(porsche);
    const expected = 1;
    expect(dealership.carsInStock.length).toBe(expected)
})

test('cars in stock', () => {
    dealership.carsInStock();
    const expected = 1;
    expect(dealership.carsInStock.length).toBe(expected);


})






// Count the number of cars in stock
// Add a car to stock
// Return an array containing each car's manufacturer
// Find all the cars from a given manufacturer
// Find the total value of all the cars in stock
