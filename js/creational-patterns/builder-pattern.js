"use strict";
/*
Notes:

Allows you to create complex objects

Produces different types and representations of an object using the same construction process.
Basically simplifies object creation where you may have a lot of parameters. For example:

const car = new Car(make, model, year, color, numDoors, weight, height)

Additionally, not all the parameters might be required by the Car constructor, the Builder pattern helps solve these problems.
We do this by extracting object construction or creation code out of its own class and move it to separate objects called BUILDERS.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.runBuilderPattern = void 0;
// BASIC BUILDER
class Car {
}
class CarBuilderSimple {
    constructor() {
        this.car = new Car();
    }
    make(make) {
        this.car.make = make;
        return this;
    }
    model(model) {
        this.car.model = model;
        return this;
    }
    year(year) {
        this.car.year = year;
        return this;
    }
    build() {
        return this.car;
    }
}
const simpleBuilder = () => {
    const car = new CarBuilderSimple()
        .make('Toyota')
        .model('Camry')
        .year(2021)
        .build();
    console.log(car);
};
// ADVANCED BUILDER
/**
 * The Director is only responsible for executing the building steps in a
 * particular sequence. It is helpful when producing products according to a
 * specific order or configuration. Strictly speaking, the Director class is
 * optional, since the client can control builders directly.
 *
 * The director hides details of construction from client code
 */
class Director {
    constructor(builder) {
        this.builder = builder;
    }
    buildBasicCar() {
        this.builder.make('Subaru');
    }
    buildFastCar() {
        this.builder.make('Subaru');
        this.builder.model('WRX STI');
        this.builder.year(2009);
    }
}
class SubaruBuilder {
    constructor() {
        this.car = new Car();
    }
    make(make) {
        this.car.make = make;
        return this;
    }
    model(model) {
        this.car.model = model;
        return this;
    }
    year(year) {
        this.car.year = year;
        return this;
    }
    build() {
        return this.car;
    }
}
const advancedBuilder = () => {
    const subaruBuilder = new SubaruBuilder();
    const director = new Director(subaruBuilder);
    director.buildBasicCar();
    const basicSubaru = subaruBuilder.build();
    console.log(basicSubaru);
    director.buildFastCar();
    const fastCar = subaruBuilder.build();
    console.log(fastCar);
};
const runBuilderPattern = () => {
    // simpleBuilder();
    advancedBuilder();
};
exports.runBuilderPattern = runBuilderPattern;
