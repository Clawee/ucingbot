// Require the necessary discord.js classes
//const { Client, Collection, Intents } = require('discord.js');
const { Discord } = require('discord.js');
require("dotenv").config();

// Create a new client instance
const client = new Discord.Client({
	intesnt: [
		"GUILDS",
		"GUILD_MESSAGES"
	]
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

// Login to Discord with your client's token
client.login(process.env.UCING_TOKEN);