const colors = require("../resources/colors");

module.exports = (msg) => {
	const inviteEmbed = {
		color: colors("pineapple"),
		description: "**[Invite me!](https://discord.com/oauth2/authorize?client_id=565701698501214218&permissions=268561488&scope=bot)**"
	}

	msg.channel.send(`<@${msg.author.id}>`, {embed: inviteEmbed});
}
