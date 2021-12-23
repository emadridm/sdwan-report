import { Command } from "@oclif/core";

export default class Meraki extends Command {
  static description = "Meraki cloud platform reports";

  async run(): Promise<void> {
    this.log("meraki");
  }
}
