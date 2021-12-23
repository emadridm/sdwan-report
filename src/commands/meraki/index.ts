import { Command, Flags } from "@oclif/core";

export default class Meraki extends Command {
  static description = "Config Meraki cloud platform";

  async run(): Promise<void> {
    this.log("meraki");
  }
}
