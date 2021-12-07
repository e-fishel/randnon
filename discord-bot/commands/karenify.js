const colors = require("../resources/colors");

let karenifier = (charString) => {
	for(let i = 0; i < charString.length; i += 3){
		conjoined += twistIt(charString[i], charString[i + 1], charString[i + 2]);
	}
}

let twistIt = (letter1, letter2, letter3) => {
	let letters = [letter1, letter2, letter3]
	if(letters[2] == undefined){
		if(letters[1] == undefined){
			if(Math.floor(Math.random() * 2)) return letters[0].toUpperCase(); else return letters[0].toLowerCase();
		} else {
			if(Math.floor(Math.random() * 2)){
				letters[1] = letters[1].toUpperCase();
			} else {
				letters[1] = letters[1].toLowerCase();
			}
			if(Math.floor(Math.random() * 2)){
				letters[0] = letters[0].toUpperCase();
			} else {
				letters[0] = letters[0].toLowerCase();
			}
			return `${letters[0]}${letters[1]}`;
		}
	} else {
		for(let i = 0; i < letters.length; i++) {
			letters[i] = letters[i].toUpperCase();
		}
		let rand3index = Math.floor(Math.random() * 3);
		letters[rand3index] = letters[rand3index].toLowerCase();
		return `${letters[0]}${letters[1]}${letters[2]}`;
	}
}

let conjoined = "";

module.exports = (msg, args) => {
	if(args[0] == undefined) return;
	if(conjoined.length > 1900) return msg.reply("Too many letters");
	const charString = args.join(" ").split("");
	karenifier(charString);
	const karenifyEmbed = {
		color: colors("pineapple"),
		description: conjoined
	}
	msg.channel.send(`<@${msg.author.id}>`, {embed: karenifyEmbed});
	conjoined = "";
}
