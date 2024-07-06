"use strict";
// https://www.youtube.com/watch?v=QNpwWkdFvgQ
/*
Notes:

Creational patten. Allows you to produce families of related objects without specifying their concrete classes.
This is esentially a wrapper around the factory method pattern. Basically allowing you to create a factory for your factories.

Interface will always be created for the end product.
Client will instantiate the concrete objects (concrete factory and concrete product).

In this example below, we will look at 2 companies, Asus and MSI, that can produce different kinds of monitors and GPUs.

Enforces the open-closed and single responsibility principles (SOLID).
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAbstractFactoryMethod = void 0;
// Abstract Factory
class Company {
}
// Concrete Factory 1
class MSIFactory extends Company {
    createGPU() {
        const msiGpu = new MsiGpu('MSI 2000', 500);
        return msiGpu;
    }
    createMonitor() {
        const msiMonitor = new MsiMonitor('MSI Monitor 2000', 400);
        return msiMonitor;
    }
}
// Concrete Factory 2
class AsusFactory extends Company {
    createGPU() {
        const asusGpu = new AsusGpu('Asus XZY', 600);
        return asusGpu;
    }
    createMonitor() {
        const asusMonitor = new AsusMonitor('Asus Ultra', 700);
        return asusMonitor;
    }
}
// Concrete Product A1
class MsiGpu {
    constructor(name, price) {
        console.log('This is a MSI GPU');
        console.log(`Name: ${name}, Price: ${price}`);
        console.log('-----------------------------');
        this.name = name;
        this.price = price;
    }
}
// Concrete Product B1
class MsiMonitor {
    constructor(name, price) {
        console.log('This is a MSI Monitor');
        console.log(`Name: ${name}, Price: ${price}`);
        console.log('-----------------------------');
        this.name = name;
        this.price = price;
    }
}
// Concrete Product A2
class AsusGpu {
    constructor(name, price) {
        console.log('This is a Asus GPU');
        console.log(`Name: ${name}, Price: ${price}`);
        console.log('-----------------------------');
        this.name = name;
        this.price = price;
    }
}
// Concrete Product B2
class AsusMonitor {
    constructor(name, price) {
        console.log('This is a Asus Monitor');
        console.log(`Name: ${name}, Price: ${price}`);
        console.log('-----------------------------');
        this.name = name;
        this.price = price;
    }
}
const client = () => {
    const msiFactory = new MSIFactory(); // Concrete Factory 1
    const msiGPU = msiFactory.createGPU(); // Concrete Product A1
    const msiMonitor = msiFactory.createMonitor(); // Concrete Product B1
    const asusFactory = new AsusFactory(); // Concrete Factory 2
    const asusGpu = asusFactory.createGPU(); // Concrete Product A2
    const asusMonitor = asusFactory.createMonitor(); // Concrete Product B2
};
const runAbstractFactoryMethod = () => {
    client();
};
exports.runAbstractFactoryMethod = runAbstractFactoryMethod;
