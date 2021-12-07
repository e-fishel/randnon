const colors = require("../resources/colors");

const cap = 20;

module.exports = (msg, args) => {
	args[0] = parseInt(args[0]);
	if(isNaN(args[0])) args[0] = 1;
	args[0] = Math.abs(args[0]) ?? 1;
	if(args[0] > cap) args[0] = cap;
	let plural = args[0] === 1 ? "" : "s";
	let flips = `After ${args[0]} flip${plural} `;

	while(args[0]--){
		flips += Math.round(Math.random()) ? "`Heads` " : "`Tails` ";
	}

	const coinFlipEmbed = {
		color: colors("pineapple"),
		description: flips
	}
	msg.channel.send(`<@${msg.author.id}>`, {embed: coinFlipEmbed});
}
