const { messageLink } = require('discord.js');
const Discord = require('discord.js');

const prefix = '/';

const client = new Discord.Client({
	allowedMentions: {
		parse: ['users', 'roles'],
		repliedUser: true,

	},
	intents: [
		"Guilds",
		"GuildMessages",
		"GuildPresences",
		"GuildMembers",
		"GuildMessageReactions"
	],

});

client.on("ready", () => {
    console.log("Harald is trying to hack the server report him quick")

})

client.login("")