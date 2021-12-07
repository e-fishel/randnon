const colors = require("../resources/colors");

let weekOfYear = (date) => {
	const week = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24 / 7);
	return date.getDay() > 3 ? week - 1 : week;
}

module.exports = (msg, args) => {
	if(args[0] == undefined){
		const today = new Date();
		const year = today.getFullYear() % 100;
		const snapshotUrl = `https://www.minecraft.net/en-us/article/minecraft-snapshot-${year}w${weekOfYear(today) + 1}a`
		const snapshotEmbed = {
			title: `Snapshot ${year}w${weekOfYear(today) + 1}a Window`,
			color: colors("pineapple"),
			description: snapshotUrl
		}
		msg.channel.send(`<@${msg.author.id}>`, {embed: snapshotEmbed});
	} else if(args[0].length === 6 && !isNaN(args[0].substr(0, 1)) && args[0].charAt(2) === "w" && args[0].substr(3, 2) >= 1 && args[0].substr(3, 2) <= 52){
		const snapshotUrl = `https://www.minecraft.net/en-us/article/minecraft-snapshot-${args[0].substr(0, 5)}a`;
		const snapshotEmbed = {
			title: `Snapshot ${args[0]} Window`,
			color: colors("pineapple"),
			description: snapshotUrl
		}
		msg.channel.send(`<@${msg.author.id}>`, {embed: snapshotEmbed});
	} else {
		msg.reply("`Incorrect snapshot name, use YYwWWn where YY are the last 2 digits of the year, WW is the number of the week of the year and n is a letter meaning the number of snapshots that week`");
	}
}
