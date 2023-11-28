const fs = require('node:fs');
const path = require('node:path');
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token, gmId } = require('./config.json');
const ERT = "**";
const ER = "||";

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once(Events.ClientReady, c => {
	console.log(`Ready, connected as ${c.user.tag}`);
});	

client.on(Events.MessageCreate, async message => {
	if (message.content.startsWith("/r "))
	{
		var total = 0;
		var txt = "";
		var msg = message.content.substring(3).split('-');
		for (var k = 0; k < msg.length; k++)
		{
			var fmsg = msg[k].split('+');
			for (var i = 0; i < fmsg.length; i++)
			{
				if (k > 0 && i == 0)
					txt += "- "
				else if (i > 0)
					txt += "+ ";
				fmsg[i] = fmsg[i].trim().toUpperCase();
				if (fmsg[i].includes('D'))
				{
					const dice = fmsg[i].split('D');
					const dices = parseInt(dice[0]);
					const faces = parseInt(dice[1]);
					txt += "( ";
					for (var j = 0; j < dices; j++)
					{
						const res = Math.floor(Math.random() * faces) + 1;
						if (k > 0 && i == 0)
						{
							total -= res;
							txt += res + " ";
							if (j < dices - 1)
								txt += "+ ";
						}
						else
						{
							total += res;
							txt += res + " ";
							if (j < dices - 1)
								txt += "+ ";
						}
					}
					txt += ") ";
				}
				else
				{
					if (k > 0 && i == 0)
					{
						txt += fmsg[i] + " ";
						total -= parseInt(fmsg[i]);
					}
					else
					{
						txt += fmsg[i] + " ";
						total += parseInt(fmsg[i]);
					}
				}
			}
		}
		message.reply(`${ERT}${total}${ERT}\n${ER}${txt}${ER}`);
	}
	if (message.content.startsWith("/roll "))
	{
		var total = 0;
		var txt = "";
		var msg = message.content.substring(6).split('-');
		for (var k = 0; k < msg.length; k++)
		{
			var fmsg = msg[k].split('+');
			for (var i = 0; i < fmsg.length; i++)
			{
				if (k > 0 && i == 0)
					txt += "- "
				else if (i > 0)
					txt += "+ ";
				fmsg[i] = fmsg[i].trim().toUpperCase();
				if (fmsg[i].includes('D'))
				{
					const dice = fmsg[i].split('D');
					const dices = parseInt(dice[0]);
					const faces = parseInt(dice[1]);
					txt += "( ";
					for (var j = 0; j < dices; j++)
					{
						const res = Math.floor(Math.random() * faces) + 1;
						if (k > 0 && i == 0)
						{
							total -= res;
							txt += res + " ";
							if (j < dices - 1)
								txt += "+ ";
						}
						else
						{
							total += res;
							txt += res + " ";
							if (j < dices - 1)
								txt += "+ ";
						}
					}
					txt += ") ";
				}
				else
				{
					if (k > 0 && i == 0)
					{
						txt += fmsg[i] + " ";
						total -= parseInt(fmsg[i]);
					}
					else
					{
						txt += fmsg[i] + " ";
						total += parseInt(fmsg[i]);
					}
				}
			}
		}
		message.reply(`${ERT}${total}${ERT}\n${ER}${txt}${ER}`);
	}
	if (message.content.startsWith("/gmroll ")) {
		var total = 0;
		var txt = "";
		var msg = message.content.substring(8).split('-');
		for (var k = 0; k < msg.length; k++)
		{
			var fmsg = msg[k].split('+');
			for (var i = 0; i < fmsg.length; i++)
			{
				if (k > 0 && i == 0)
					txt += "- "
				else if (i > 0)
					txt += "+ ";
				fmsg[i] = fmsg[i].trim().toUpperCase();
				if (fmsg[i].includes('D'))
				{
					const dice = fmsg[i].split('D');
					const dices = parseInt(dice[0]);
					const faces = parseInt(dice[1]);
					txt += "( ";
					for (var j = 0; j < dices; j++)
					{
						const res = Math.floor(Math.random() * faces) + 1;
						if (k > 0 && i == 0)
						{
							total -= res;
							txt += res + " ";
							if (j < dices - 1)
								txt += "+ ";
						}
						else
						{
							total += res;
							txt += res + " ";
							if (j < dices - 1)
								txt += "+ ";
						}
					}
					txt += ") ";
				}
				else
				{
					if (k > 0 && i == 0)
					{
						txt += fmsg[i] + " ";
						total -= parseInt(fmsg[i]);
					}
					else
					{
						txt += fmsg[i] + " ";
						total += parseInt(fmsg[i]);
					}
				}
			}
		}
		client.users.fetch(gmId, false).then((user) => {
			user.send(`${message.author.displayName} rolled a ${ERT}${total}${ERT}\n${ER}${txt}${ER}`);
		});
	}
});

client.login(token);
