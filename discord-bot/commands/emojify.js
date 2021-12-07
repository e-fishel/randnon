const colors = require("../resources/colors");

let emojifier = (characterArray) => {
	for(let i = 0; i < characterArray.length; i++){
		if(/[a-z]/.test(characterArray[i])){
			conjoined += template(characterArray[i]);
			continue;
		}
		if(characterArray[i] === " "){
			conjoined += ":blue_square:";
			continue;
		}
		if(Object.keys(writeNumber).includes(characterArray[i])){
			conjoined += writeNumber[characterArray[i]];
			continue;
		}
	}
}

let template = (letter) => `:regional_indicator_${letter}:`;

const abecet = [
	"a", "b", "c",
	"d", "e", "f",
	"g", "h", "i",
	"j", "k", "l",
	"m", "n", "o",
	"p", "q", "r",
	"s", "t", "u",
	"v", "w", "x",
	"y", "z"
]

const writeNumber = [
	":zero:",
	":one:",
	":two:",
	":three:",
	":four:",
	":five:",
	":six:",
	":seven:",
	":eight:",
	":nine:"
]

let conjoined = "";

module.exports = (msg, args) => {
	if(args.join(" ").length > 1900) return msg.reply("Too many letters");

	if(args[0] == undefined) return msg.reply("`<text>`");

	const charString = args.join(" ").toLowerCase().split("");
	emojifier(charString);
	const emojifyEmbed = {
		color: colors("pineapple"),
		description: conjoined
	}
	msg.channel.send(`<@${msg.author.id}>`, {embed: emojifyEmbed});
	conjoined = "";
}
