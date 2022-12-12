import { Client, GatewayIntentBits } from "discord.js";
import events from "../events";
import { registerEvents } from "../utils";
import keys from "../keys";

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

registerEvents(client, events);

client.login(keys.clientToken).catch((err) => {
  console.error("[login Error]", err);
  process.exit(1);
});
