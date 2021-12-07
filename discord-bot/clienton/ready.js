const client = require("../../index");

let owners = [], ownerRepetitions = [];

const statisticsChannelsId = {
	serverCount: "123456789012345678",
	shardCount: "123456789012345678",
	userCount: "123456789012345678"
}

module.exports = () => {
	//set status
	client.user.setPresence({
		status: "online",
		activity: {
			name: "&help or @RandNon",
			type: "LISTENING"
		}
	});
	//log stuff
		//servers
	console.log("");
	client.guilds.cache.forEach((i) => {
		owners.push(i.ownerID);
	});
	owners.sort((a, b) => a - b);
	for(let i = 0; i < owners.length; i++){
		if(!i) continue;
		if(owners[i] == owners[i - 1]){
			ownerRepetitions[owners[i]] ??= 1;
			ownerRepetitions[owners[i]]++;
		}
	}
	console.log("║");
		//repeated owners
	if(Object.keys(ownerRepetitions).length){
		console.log("╠═Oh noes, repeated server owner\u0027s IDs 😕");
		Object.keys(ownerRepetitions).forEach((i) => {
			console.log(`╠═User ID ${i} has ${ownerRepetitions[i]} servers with RandNon`);
		});
	} else {
		console.log("╠═No repeated server owner\u0027s IDs yay 😃");
	}
		//shards and servers
	console.log(`║\n╠═🔌 ${client.guilds.cache.size} servers\n╠═💎 ${client.ws.shards.size} shard${client.ws.shards.size === 1 ? "" : "s"}`);
	//change support server\u0027s statistics
	try {
		const totalUsers = client.guilds.cache.reduce((t, i) => t + i.memberCount, 0);
		console.log(`╚═👤 ${totalUsers} users`);

		client.channels.cache.get(statisticsChannelsId.serverCount).setName(`🔌 ${client.guilds.cache.size} servers`);

		client.channels.cache.get(statisticsChannelsId.shardCount).setName(`💎 ${client.ws.shards.size} shard${client.ws.shards.size === 1 ? "" : "s"}`);

		client.channels.cache.get(statisticsChannelsId.userCount).setName(`👤 ${totalUsers} users`);

	} catch(e) {
		console.log("nOnFaTaL ErRrOr", e);
	}
}
