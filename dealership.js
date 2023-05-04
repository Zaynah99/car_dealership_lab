//CONSTRUCTOR

const Dealership = function (name, maxNoOfCars, carsInStock){
    this.name = name;
    this.maxNoOfCars = maxNoOfCars;
    this.carsInStock = [];
};

//FUNCTIONS

Dealership.prototype.addStock = function (car){
    this.carsInStock.push(car);
};

Dealership.prototype.carsInStock = function () {
    return this.carsInStock.length;
}

module.exports = Dealership;