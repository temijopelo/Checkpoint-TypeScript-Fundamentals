var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine Started");
    };
    return Car;
}());
var myCar = new Car("BMW", "SUV", 2017);
myCar.start();
