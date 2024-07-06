/**
 * Notes:
 *
 * The command pattern reminds me of functional programming in javascript.
 *
 * It turns a request/function into a stand alone object that contains everything about that request.
 * Encapsulates all the relevant information needed to perform an action or trigger an event.
 */

interface Command {
  execute(): void;
}

class Room {
  command: Command | undefined;

  constructor() {}

  setCommand(command: Command) {
    this.command = command;
  }

  executeCommand() {
    if (this.command) this.command.execute();
  }
}

class Light {
  lightState: string;

  constructor() {
    this.lightState = 'off';
  }

  switchLights() {
    if (this.lightState == 'off') {
      this.lightState = 'on';
    } else {
      this.lightState = 'off';
    }
    console.log(`The lights are ${this.lightState}.`);
  }
}

class SwitchLightsCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
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

export const runCommandPattern = () => {
  main();
};
