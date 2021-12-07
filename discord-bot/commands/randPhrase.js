const colors = require("../resources/colors");

const adj = [
	"fat", "nice", "round",
	"colorful", "little", "long",
	"smart", "happy", "tall",
	"huge", "fluffy", "slow",
	"dirty", "warm", "scary",
	"soft", "german"
]
const nou = [
	"girl", "grandpa", "cat",
	"lion", "goat", "parrot",
	"llama", "pumpkin", "dog",
	"teacher", "student", "biker",
	"bartender", "friend", "singer",
	"car"
]
const ver = [
	"backstabs", "yells at", "speaks with",
	"attends", "informs", "laughs at",
	"acts as", "listens to", "walks with",
	"feels like", "negotiates with", "helps",
	"throws", "dances with", "abducts",
	"unzips", "attacks"
]
const cAth = [
	"A", "The"
]
const ath = [
	"a", "the"
]
const secret = [
	"", "with socks "
]
const cause = [
	"", ", but they all get stabbed for coins", ", aw man‼"
]

let rand = (threshold) => Math.floor(Math.random() * threshold);

let zeroOrOne = (chances, options, fromWhere) => {
	const rInt = rand(chances) + 1;
	return rInt > options ? 0 : rInt;
}

let sendPhrase = (msg) => {
	const athe1 = rand(ath.length);
	const adje1 = rand(adj.length);
	const noun1 = rand(nou.length);
	const verb1 = rand(ver.length);
	const athe2 = rand(ath.length);
	const adje2 = rand(adj.length);
	const noun2 = rand(nou.length);
	const cause1 = zeroOrOne(200, 2, "cause");
	const secret1 = zeroOrOne(100, 1, "secret");
	return `\`\`\`${cAth[athe1]} ${adj[adje1]} ${nou[noun1]} ${secret[secret1]}${ver[verb1]} ${ath[athe2]} ${adj[adje2]} ${nou[noun2]}${cause[cause1]}\`\`\``;
}

const cap = 5;

module.exports = (msg, args) => {
	args[0] = parseInt(args[0]);
	if(isNaN(args[0])) args[0] = 1;
	args[0] = Math.abs(args[0]) ?? 1;
	if(args[0] > cap) args[0] = cap;
	let phrases = "";
	while(args[0]--){
		phrases += sendPhrase(msg);
	}
	const randPhraseEmbed = {
		color: colors("pineapple"),
		description: phrases
	}
	msg.channel.send(`<@${msg.author.id}>`, {embed: randPhraseEmbed});
}
