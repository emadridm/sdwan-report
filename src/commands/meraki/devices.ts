import { Command, Flags } from "@oclif/core";
import * as Conf from "conf";
import axios from "axios";

export default class Devices extends Command {
  static description = "List the devices in a organization";

  static flags = {
    organization: Flags.string({
      description: "Organization id",
      char: "O",
      required: true,
    }),
    perPage: Flags.integer({
      description:
        "The number of entries per page returned. Acceptable range is 3 - 1000.",
      char: "p",
      default: 10,
    }),
    serial: Flags.string({
      description: "Filter devices by serial number",
      char: "s",
    }),
    model: Flags.string({
      description: "Filter devices by model",
      char: "m",
    }),
  };

  async run(): Promise<void> {
    const config = new Conf();
    const { flags } = await this.parse(Devices);

    const httpClient = axios.create({
      baseURL: `https://api.meraki.com/api/${config.get("meraki.apiver")}`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Cisco-Meraki-API-Key": `${config.get("meraki.apikey")}`,
      },
    });

    try {
      const response = await httpClient.get(
        `organizations/${flags.organization}/devices`,
        {
          params: {
            perPage: flags.perPage,
            model: flags.model,
            serial: flags.serial,
          },
        }
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }
}
