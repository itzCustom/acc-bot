const Discord = require("discord.js");
const bot = new Discord.Client();
var embedchannel = "da";
var fs = require("fs");
var requireText = require('require-text');
var c = "#ff0000";
const prefix = ".";

bot.on("ready", () => {
	console.log(`Logged in as ${bot.user.tag}, ${bot.user.id}`);
	bot.user.setStatus("idle");
	bot.user.setGame("Testing....");
});

bot.on("message", message => {
    if(!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()) {
case "getalt": 
var alts = [
	"erik@overoyen.no:Starter12",
    "Nbear@carnegienet.net:bear1997",
    "dries_nevens@live.be:1a2z3e1r2t3y",
    "urielvasquez50@yahoo.com:Xamorx2233",
    "ajk1999@hotmail.de:Tauchen3003",
    "dan25pgm@gmail.com:18dany25",
    "bisonbrander@hotmail.com:snuffy116",
    "wlixgameing@gmail.com:nosliw13",
    "maurice.pielok@googlemail.com:maurice2003",
    "nwipokemon@gmail.com:sasha101",

];
var randomalt = alts[Math.floor(Math.random() * alts.length)];
var embed = new Discord.RichEmbed()
.setTitle(`${message.author.tag}'s MC Alts`)
.setDescription(randomalt)
.setColor(c)
message.author.send({embed});
						break;

 

}

});

bot.on("message" ,function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case "hi":
        message.channel.sendMessage("Hei!");
        break;

    }
});

bot.on("message" ,function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case "call":
        message.channel.sendMessage("Hei,@everyone");
        break;

    }
});

bot.login(process.env.BOT_TOKEN);
