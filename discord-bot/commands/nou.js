const colors = require("../resources/colors");

module.exports = (msg) => {
	let conjoined = "No u";
	let n = Math.ceil(Math.random() * 9);
	while(n--) conjoined += "no u";

	const nouEmbed = {
		color: colors("pineapple"),
		description: conjoined
	}

	msg.channel.send(`<@${msg.author.id}>`, {embed: nouEmbed});
}
