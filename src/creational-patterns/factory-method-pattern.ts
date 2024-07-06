/* 
Notes:

The interface will always be our product. In this case it is a buger.
The client will instantiate concrete objects (concrete factory and concrete product). In this case, it is the beefBurgerFactory,
vegBurgerFactory, beefBurger, and vegBurger.

Enforces the open-closed and single responsibility principles (SOLID).

*/
export interface Burger {
  name: string;
  calories: number;
  prepare(): void;
}

export abstract class Restaurant {
  abstract createBurger(): Burger;

  orderBurger(): Burger {
    const burger = this.createBurger();
    console.log(
      `Your ${burger.name} is ready! Get ready for ${burger.calories} calories mate.`
    );
    return burger;
  }
}

export class BeefBurgerFactory extends Restaurant {
  createBurger(): Burger {
    const beefBurger = new BeefBurger('Big Beef', 1000);
    return beefBurger;
  }
}

export class VeggieBurgerFactory extends Restaurant {
  createBurger(): Burger {
    const veggieBurger = new VeggieBurger('Big Veg', 800);
    return veggieBurger;
  }
}

export class BeefBurger implements Burger {
  name: string;
  calories: number;

  constructor(name: string, calories: number) {
    this.name = name;
    this.calories = calories;
  }

  prepare(): void {
    console.log('making a beef burger now');
  }
}

export class VeggieBurger implements Burger {
  name: string;
  calories: number;

  constructor(name: string, calories: number) {
    this.name = name;
    this.calories = calories;
  }

  prepare(): void {
    console.log('cookin up a veggie burger.');
  }
}

const client = () => {
  // The client should know what concrete creator they want to use. In this case, a beefBurgerFactory or a veggieBurgerFactory

  const beefBurgerFactory = new BeefBurgerFactory(); // Concrete Factory A
  const vegBurgerFactory = new VeggieBurgerFactory(); // Concrete Factory B

  const beefBurger = beefBurgerFactory.orderBurger(); // Concrete Product A
  beefBurger.prepare();

  const vegBurger = vegBurgerFactory.orderBurger(); // Concrete Product B
  vegBurger.prepare();
};

export const runFactoryMethodPattern = () => {
  client();
};
