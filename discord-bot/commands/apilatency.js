const colors = require("../resources/colors");
const client = require("../../index");

module.exports = (msg) => {
	const conjoined = `Our API latency is \`${Math.round(client.ws.ping)}\` miliseconds`;
	const pingEmbed = {
		title: "API Latency",
		color: colors("pineapple"),
		description: conjoined
	}
	msg.channel.send(`<@${msg.author.id}>`, {embed: pingEmbed});
}
