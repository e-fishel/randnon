const colors = require("../resources/colors");

module.exports = (msg) => {
	try {
		let guild = {
			icon: msg.channel.guild.icon,
			id: msg.channel.guild.id,
			name: msg.channel.guild.name
		}

		const serverIconUrl = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`;

		const serverIconEmbed = {
			title: `${guild.name}: Server Icon.`,
			color: colors("pineapple"),
			image: {
				url: serverIconUrl
			}
		}
		msg.channel.send(`<@${msg.author.id}>`, {embed: serverIconEmbed});
	} catch(e) {
		const serverIconErrorEmbed = {
			title: "Error",
			color: colors("pineapple"),
			description: "An error ocurred 😭, sorry"
		}

		msg.channel.send(`<@${msg.author.id}>`, {embed: serverIconErrorEmbed});
	}
}
