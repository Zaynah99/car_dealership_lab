
//IMPORTS
const Dealership = require ('../dealership')
const Car = require ('../car')

let dealership; //declaring object 
let porsche;

beforeEach(() => {
    dealership = new Dealership("Dealership", 25);
    porsche = new Car("Porsche", 100.000, "3.0L");
    dealership.addStock(porsche)

})


test('can add stock', () => {
    dealership.addStock(porsche);
    const expected = 2;
    expect(dealership.carsInStock.length).toBe(expected)
})


test('cars in stock', () => {
    const ferrari = new Car ("Ferrari", 250.000, "4.0L")
    dealership.addStock(ferrari);
    const expected = 2;
    expect(dealership.carsInStock.length).toBe(expected);

})


// get all car manufacturers
test('returns manufacturers', () => {
    expected = ["Porsche"]
    actual = dealership.manufacturerName()
    expect(actual).toEqual(expected)
});

test('returns value of all cars in stock'), () => {
    const expected = 250000
    const result = dealership.valueOfCars();
    expect(result).toBe(expected);
}






// // Filtered car manufacturer
// test('returns filtered manufacturer', () => {
//     const expected = Porsche;
//     actual = dealership.getCarByManufacturer(Porsche)
//     expect(actual).toBe(expected)
// });



// calculate stock value()















// Count the number of cars in stock
// Add a car to stock
// Return an array containing each car's manufacturer
// Find all the cars from a given manufacturer
// Find the total value of all the cars in stock

