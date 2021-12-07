const colors = require("../resources/colors");
const cmdinfo = require("../resources/commands");

module.exports = (msg, args, prefix) => {
	const helpEmbed = {
    title: "Help Panel",
    color: colors("pineapple"),
    description: "**[Invite me!](https://discord.com/oauth2/authorize?client_id=565701698501214218&permissions=268561488&scope=bot) - [Join the support server!](https://discord.gg/8F5euwYV7w)**",
    image: {
    	url: "https://cdn.discordapp.com/attachments/818154681103810612/839347077523570698/icon2.png"
    },
    fields: cmdinfo(prefix, "fields")
	}
	msg.channel.send(`<@${msg.author.id}>`, {embed: helpEmbed});
}
