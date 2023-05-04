//CONSTRUCTOR 
const Car = function (manufacturer, price, engine){
    this.manufacturer = manufacturer;
    this.price = price;
    this.engine = engine
};

const audi = new Car("Audi", "£35,000", "3.0L")
console.log(audi);

module.exports = {Car};