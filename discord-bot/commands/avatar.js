const colors = require("../resources/colors");
const client = require("../../index");
// const fs = require("fs");

module.exports = (msg, args) => {
	let user = {
		avatar: msg.author.avatar,
		discriminator: msg.author.discriminator,
		id: msg.author.id,
		username: msg.author.username
	}
	if(args[0] != undefined){
		if(!isNaN(args[0])) user.id = args[0];
		if(args[0].startsWith("<@") && args[0].endsWith(">")) user.id = args[0].charAt(2) === "!" ? args[0].slice(3, -1) : args[0].slice(2, -1);

		try {//Try locating the id
			const mentionedUser = client.users.cache.find(u => u.id === user.id);

			user.avatar = mentionedUser.avatar;
			user.discriminator = mentionedUser.discriminator;
			user.username = mentionedUser.username;
		} catch(e) {//If its not there then send an error
			const avatarErrorEmbed = {
				title: "Error",
				color: colors("pineapple"),
				description: `Couldn\u0027t find specified user mentioned: ${args[0]}`
			}
			return msg.channel.send(`<@${msg.author.id}>`, {embed: avatarErrorEmbed});
			console.log(`Nonexsistent user ID: ${args[0]}`);
		}
	}

	const avatarUrl = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
	const avatarEmbed = {
		title: `${user.username}#${user.discriminator}\u0027s avatar`,
		color: colors("pineapple"),
		image: {
			url: avatarUrl
		}
	}
	msg.channel.send(`<@${msg.author.id}>`, {embed: avatarEmbed});
}
