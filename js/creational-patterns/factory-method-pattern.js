"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runFactoryMethodPattern = exports.VeggieBurger = exports.BeefBurger = exports.VeggieBurgerFactory = exports.BeefBurgerFactory = exports.Restaurant = void 0;
class Restaurant {
    orderBurger() {
        const burger = this.createBurger();
        console.log(`Your ${burger.name} is ready! Get ready for ${burger.calories} calories mate.`);
        return burger;
    }
}
exports.Restaurant = Restaurant;
class BeefBurgerFactory extends Restaurant {
    createBurger() {
        const beefBurger = new BeefBurger('Big Beef', 1000);
        return beefBurger;
    }
}
exports.BeefBurgerFactory = BeefBurgerFactory;
class VeggieBurgerFactory extends Restaurant {
    createBurger() {
        const veggieBurger = new VeggieBurger('Big Veg', 800);
        return veggieBurger;
    }
}
exports.VeggieBurgerFactory = VeggieBurgerFactory;
class BeefBurger {
    constructor(name, calories) {
        this.name = name;
        this.calories = calories;
    }
    prepare() {
        console.log('making a beef burger now');
    }
}
exports.BeefBurger = BeefBurger;
class VeggieBurger {
    constructor(name, calories) {
        this.name = name;
        this.calories = calories;
    }
    prepare() {
        console.log('cookin up a veggie burger.');
    }
}
exports.VeggieBurger = VeggieBurger;
const client = () => {
    // The client should know what concrete creator they want to use. In this case, a beefBurgerFactory or a veggieBurgerFactory
    const beefBurgerFactory = new BeefBurgerFactory(); // Concrete Factory A
    const vegBurgerFactory = new VeggieBurgerFactory(); // Concrete Factory B
    const beefBurger = beefBurgerFactory.orderBurger(); // Concrete Product A
    beefBurger.prepare();
    const vegBurger = vegBurgerFactory.orderBurger(); // Concrete Product B
    vegBurger.prepare();
};
const runFactoryMethodPattern = () => {
    client();
};
exports.runFactoryMethodPattern = runFactoryMethodPattern;
