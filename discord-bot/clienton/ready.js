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
	console.log("β");
		//repeated owners
	if(Object.keys(ownerRepetitions).length){
		console.log("β βOh noes, repeated server owner\u0027s IDs π");
		Object.keys(ownerRepetitions).forEach((i) => {
			console.log(`β βUser ID ${i} has ${ownerRepetitions[i]} servers with RandNon`);
		});
	} else {
		console.log("β βNo repeated server owner\u0027s IDs yay π");
	}
		//shards and servers
	console.log(`β\nβ βπ ${client.guilds.cache.size} servers\nβ βπ ${client.ws.shards.size} shard${client.ws.shards.size === 1 ? "" : "s"}`);
	//change support server\u0027s statistics
	try {
		const totalUsers = client.guilds.cache.reduce((t, i) => t + i.memberCount, 0);
		console.log(`ββπ€ ${totalUsers} users`);

		client.channels.cache.get(statisticsChannelsId.serverCount).setName(`π ${client.guilds.cache.size} servers`);

		client.channels.cache.get(statisticsChannelsId.shardCount).setName(`π ${client.ws.shards.size} shard${client.ws.shards.size === 1 ? "" : "s"}`);

		client.channels.cache.get(statisticsChannelsId.userCount).setName(`π€ ${totalUsers} users`);

	} catch(e) {
		console.log("nOnFaTaL ErRrOr", e);
	}
}
