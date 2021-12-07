const colors = require("../resources/colors");

module.exports = (msg) => {
	const supportEmbed = {
		color: colors("pineapple"),
		description: "**[Join the support server!](https://discord.gg/8F5euwYV7w)**"
	}
	msg.channel.send(`<@${msg.author.id}>`, {embed: supportEmbed});
}
