// const Discord = require("discord.js");
// const client = new Discord.Client({shards: "auto"});

const { Client, Intents } = require("discord.js");
let intents = new Intents(Intents.NON_PRIVILEGED);
intents.add('GUILD_MEMBERS');
const client = new Client({ws: {intents: intents}, shards: "auto"});


const { token } = require("./discord-bot/resources/token");

module.exports = client;

const messageHandler = require("./discord-bot/clienton/message");
const readyHandler = require("./discord-bot/clienton/ready");
const logHandler = require("./discord-bot/clienton/error");

client.on("ready", readyHandler);
client.on("message", messageHandler);
client.on("error", logHandler);
client.on("warn", logHandler);

client.login(token);
