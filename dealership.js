//CONSTRUCTOR

const Dealership = function (name, maxNoOfCars, carsInStock){
    this.name = name;
    this.maxNoOfCars = maxNoOfCars;
    this.carsInStock = this.carsInStock;
};

//FUNCTIONS


//method for counting stock
Dealership.prototype.carsInStock = function () {
    return this.carsInStock.length;
}

//method for adding stock to dealership
Dealership.prototype.addStock = function (car){
    this.carsInStock.push(car);
};

//MAP
Dealership.prototype.manufacturerName = function (){
    const manufacturers = this.carsInStock.map(car => car.manufacturer); 
    return manufacturers;
}

// FILTER
Dealership.prototype.getCarByManufacturer = function (){
    const filteredCars = this.carsInStock.filter ("Porsche");
}



module.exports = Dealership;