"use strict";
/*
https://www.youtube.com/watch?v=DcFhITC9v0E&list=PLlsmxlJgn1HJpa28yHzkBmUY-Ty71ZUGc&index=6
Notes:

Delegates the object duplication or cloning process to the actual objects that are being cloned.

Be careful of shallow (reference) vs deep (value) copy. If you are copying an object that
is part of the object you are copying, you want to make sure you clone that object too.

Use the prototype pattern when your code shouldnt depend on the concrete classes of the objects
that you need to copy or duplicate. This means you dont want to use the class constructor to create
a duplicate (you would need to copy over each property to the new object manualy).
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.runPrototypePattern = void 0;
// Code exercise below is from Neetcode.io
class Shape {
    /**
     * @return {Shape}
     */
    clone() { }
}
/**
 * @param {number} width
 * @param {number} height
 * @return {Rectangle}
 */
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    /**
     * @return {number}
     */
    getWidth() {
        return this.width;
    }
    /**
     * @return {number}
     */
    getHeight() {
        return this.height;
    }
    /**
     * @return {Shape}
     */
    clone() {
        // Write your code here
        const rectangle = new Rectangle(this.width, this.height);
        return rectangle;
    }
}
/**
 * @param {number} length
 * @return {Square}
 */
class Square extends Shape {
    constructor(length) {
        super();
        this.length = length;
    }
    /**
     * @return {number}
     */
    getLength() {
        return this.length;
    }
    /**
     * @return {Shape}
     */
    clone() {
        // Write your code here
        const square = new Square(this.length);
        return square;
    }
}
class Test {
    /**
     * @param {Shape[]} shapes
     * @return {Shape[]}
     */
    cloneShapes(shapes) {
        // Write your code here
        const clonedShapes = [];
        for (let i = 0; i < shapes.length; i++) {
            let shape = shapes[i];
            let clonedShape = shape.clone();
            clonedShapes.push(clonedShape);
        }
        return clonedShapes;
    }
}
const client = () => {
    const test = new Test();
    const rectangle = new Rectangle(10, 5);
    const square = new Square(7);
    const shapes = [rectangle, square];
    const clonedShapes = test.cloneShapes(shapes);
    console.log('Original Shapes:', shapes);
    console.log('Cloned Shapes:', clonedShapes);
};
const runPrototypePattern = () => {
    client();
};
exports.runPrototypePattern = runPrototypePattern;
