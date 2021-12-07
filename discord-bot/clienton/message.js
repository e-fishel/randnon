const randphrase = phrase = require("../commands/randPhrase");
const help = commands = require("../commands/help");
const random = rand = require("../commands/random");
const portalcoords = porcoords = require("../commands/portalCoords");
const coinflip = cf = require("../commands/coinFlip");
const emojify = require("../commands/emojify");
const karenify = require("../commands/karenify");
const invite = require("../commands/invite");
const nou = require("../commands/nou");
const snapshot = require("../commands/snapshot");
const support = require("../commands/support");
const jecase = require("../commands/case");
const apilatency = require("../commands/apilatency");
const avatar = require("../commands/avatar");
const servericon = icon = require("../commands/serverIcon");
//↑commansdList

const commandsList = {
	randphrase,
	phrase,
	help,
	rand,
	random,
	porcoords,
	portalcoords,
	coinflip,
	cf,
	emojify,
	karenify,
	invite,
	"no-u": nou,
	snapshot,
	support,
	commands,
	"case": jecase,
	apilatency,
	avatar,
	servericon,
	icon
}
//pointers

const prefix = "&";
// const fs = require("fs");

module.exports = (msg) => {
	if(msg.guild == undefined && !msg.author.bot){
		msg.reply("I\u0027ll have to restart my potatoes")
	  .then((msg) => {
	    setTimeout(() => msg.delete(), 10000)
	  })
	  .catch((e) => {
			console.log("nOnFaTaL eRrOr", e);
		});
	} else {
		if(msg.content === "<@!<your bot id>") return msg.channel.send(`My prefix is \`${prefix}\`, try \`${prefix}help\``);

		if(!msg.content.startsWith(prefix)) return;
		if(msg.author.bot) return;


		// let servers = require("../resources/servers");
		// let guildId = msg.channel.guild.id;
		//
		// if(servers[guildId] == undefined){
		// 	console.log(`Created server ${guildId} with prefix &`);
		// let name = "discord-bot/resources/servers.json"
		// 	var contents = JSON.parse(fs.readFileSync(name));
		//     contents[guildId] = "&";
		//     fs.writeFileSync(name, JSON.stringify(contents, undefined, 4));
		// }
		//
		// let prefix = servers[guildId];
		// console.log(msg.channel.guild.id);


		const args = msg.content.split(" ");
		console.log(args);
		const command = args.shift().substr(prefix.length).toLowerCase();
		if(Object.keys(commandsList).includes(command)){
			commandsList[command](msg, args, prefix);
		}
	}
	return;
}
