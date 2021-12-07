const colors = require("../resources/colors");

module.exports = (msg, args) => {
	if(args.length < 4) return msg.reply("`(overworld|nether) <x> <y> <z>`");
	let coords = [];
	args[0] = args[0].toLowerCase();
	Math.round(args[1]);
	Math.round(args[2]);
	Math.round(args[3]);
	coords[0] = args[1];
	coords[1] = args[3];
	let conjoined = "";
	switch(args[0]){
		case "o":
		case "overworld":
			args[1] /= 8;
			args[3] /= 8;
			args[1] = Math.round(args[1]);
			args[3] = Math.round(args[3]);
			conjoined = `Coords \`(${coords[0]}, ${args[2]}, ${coords[1]})\` in the overworld become \`(${args[1]}, ${args[2]}, ${args[3]})\` in the nether`;
			break;
		case "n":
		case "nether":
			args[1] *= 8;
			args[3] *= 8;
			conjoined = `Coords \`(${coords[0]}, ${args[2]}, ${coords[1]})\` in the nether become \`(${args[1]}, ${args[2]}, ${args[3]})\` in the overworld`;
			break;
		default:
			return msg.reply("`(overworld|nether) <x> <y> <z>`");
	}

	const portalCoordsEmbed = {
		color: colors("pineapple"),
		description: conjoined
	}
	msg.channel.send(`<@${msg.author.id}>`, {embed: portalCoordsEmbed});
}
