const colors = require("../resources/colors");

const cap = 20;

module.exports = (msg, args) => {
	if(isNaN(args.join(""))) return;
	args[0] = parseInt(args[0]);
	args[1] ??= 1;
	args[2] ||= 1;
	args[1] = parseInt(args[1]);
	args[2] = parseInt(args[2]);
	if(args[1] < args[0]){
		let tmp = args[0];
		args[0] = args[1];
		args[1] = tmp;
	}
	if(args[2] < 0) args[2] *= -1;
	if(args[2] > cap) args[2] = cap;
	let conjoined = "";
	while(args[2]--) conjoined += `\`${Math.floor(Math.random() * (args[1] - args[0] + 1)) + args[0]}\` `;

	const randomEmbed = {
		color: colors("pineapple"),
		description: conjoined
	}

	msg.channel.send(`<@${msg.author.id}>`, {embed: randomEmbed});
}
