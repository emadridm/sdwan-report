import { Command } from "@oclif/core";

export default class Devices extends Command {
  async run(): Promise<void> {
    console.log("device");
  }
}
