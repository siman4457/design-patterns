"use strict";
/**
 * Notes:
 *
 * The command pattern reminds me of functional programming in javascript.
 *
 * It turns a request/function into a stand alone object that contains everything about that request.
 * Encapsulates all the relevant information needed to perform an action or trigger an event.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCommandPattern = void 0;
class Room {
    constructor() { }
    setCommand(command) {
        this.command = command;
    }
    executeCommand() {
        if (this.command)
            this.command.execute();
    }
}
class Light {
    constructor() {
        this.lightState = 'off';
    }
    switchLights() {
        if (this.lightState == 'off') {
            this.lightState = 'on';
        }
        else {
            this.lightState = 'off';
        }
        console.log(`The lights are ${this.lightState}.`);
    }
}
class SwitchLightsCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.switchLights();
    }
}
const main = () => {
    const simansRoom = new Room();
    const light = new Light();
    const switchLightCommand = new SwitchLightsCommand(light);
    simansRoom.setCommand(switchLightCommand);
    simansRoom.executeCommand(); //Turn the light on
    simansRoom.executeCommand(); //Turn the light off
};
const runCommandPattern = () => {
    main();
};
exports.runCommandPattern = runCommandPattern;
