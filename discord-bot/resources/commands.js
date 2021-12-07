const cmdinfo = (prefix) => [
	{
		cmd: "apilatency",
		args: "",
		name: `\`${prefix}apilatency\``,
		value: "Sends the websocket\u0027s latency",
	},
	{
		cmd: "avatar",
		args: "[(id|mention)]",
		name: `\`${prefix}avatar [(id|mention)]\``,
		value: "Displays someone\u0027s avatar",
	},
	{
		cmd: "case",
		args: "(lower|upper|flip) <text>",
		name: `\`${prefix}case (lower|upper|flip) <text>\``,
		value: "Converts any character that is supported into a different case, examples to test: ς, δ, ʃ, ω, ð, ɖ, đ",
	},
	{
		cmd: "coinFlip",
		args: "[<count>]",
		name: `\`${prefix}coinFlip [<count>]\` Aliases: \`${prefix}cF\``,
		value: "Simulates some basic ½ coinflips",
	},
	{
		cmd: "emojify",
		args: "",
		name: `\`${prefix}emojify <text>\``,
		value: "Makes text into Discord emojis (might only work for destop)",
	},
	{
		cmd: "help",
		args: "",
		name: `\`${prefix}help\` Aliases: \`${prefix}commands\``,
		value: "Well, it\u0027s this window!",
	},
	{
		cmd: "invite",
		args: "",
		name: `\`${prefix}invite\``,
		value: "Links RandNon\u0027s invite, if you feel the need to have RandNon",
	},
	{
		cmd: "karenify",
		args: "<text>",
		name: `\`${prefix}karenify <text>\``,
		value: "Randomizes capitaliztion",
	},
	{
		cmd: "no-u",
		args: "",
		name: `\`${prefix}no-u\``,
		value: "Uno reverse card",
	},
	{
		cmd: "portalCoords",
		args: "(nether|overworld) <x> <y> <z>",
		name: `\`${prefix}portalCoords (nether|overworld) <x> <y> <z>\` Aliases: \`${prefix}porCoords\``,
		value: "Calculates the location for an optimal nether portal in either dimention",
	},
	{
		cmd: "random",
		args: "<min> [<max>] [<count>]",
		name: `\`${prefix}random <min> [<max>] [<count>]\` Aliases: \`${prefix}rand\``,
		value: "Sends super basic randomness, not much else",
	},
	{
		cmd: "randPhrase",
		args: "[<count>]",
		name: `\`${prefix}randPhrase [<count>]\` Aliases: \`${prefix}phrase\``,
		value: "Sends a kind of random phrase",
	},
	{
		cmd: "serverIcon",
		args: "",
		name: `\`${prefix}serverIcon\` Aliases: \`${prefix}icon\``,
		value: "Shows the current server icon",
	},
	{
		cmd: "snapshot",
		args: "[<snapshot>]",
		name: `\`${prefix}snapshot [<snapshot>]\``,
		value: "Finds the official snapshot\u0027s article given its code",
	},
	{
		cmd: "support",
		args: "",
		name: `\`${prefix}support\``,
		value: "Links RandNon\u0027s support server so you can join it and reach out for help",
	}
]

module.exports = (prefix, ...args) => {
	switch(args[0]){
		case "fields":
			const embedFields = cmdinfo(prefix).map((i) => {
				const {name, value} = i;
				return {
					name,
					value
				};
			});
			return embedFields;
			break;
		default:
			return undefined;
	}
}
