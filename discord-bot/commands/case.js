const colors = require("../resources/colors");

module.exports = (msg, args) => {
	if(args.join(" ").length >= 1900) return msg.reply("Too many letters");
	if(args.length < 2) return msg.reply("`(lower|upper|flip) <text>`")

	let conjoined = "";
	switch(args[0].toLowerCase()){
		case "lower":
			args.shift();
			conjoined = args.join(" ").toLowerCase();
			break;
		case "upper":
			args.shift();
			conjoined = args.join(" ").toUpperCase();
			break;
		case "flip":
			args.shift();
			args = args.join(" ").split("");
			for(let i = 0; i < args.length; i++){
				args[i] = args[i] === args[i].toUpperCase() ? args[i].toLowerCase() : args[i].toUpperCase();
			}
			conjoined = args.join("");
			break;
		default:
			return msg.reply("`(lower|upper|flip) <text>`");
	}
	const caseEmbed = {
		description: conjoined,
		color: colors("pineapple")
	}
	msg.channel.send(`<@${msg.author.id}>`, {embed: caseEmbed});
}
