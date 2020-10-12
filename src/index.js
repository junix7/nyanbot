const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const cooldown = new Set()
/*client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});*/



client.on("ready", () => {
   console.log(`Estoy listo!, conectado en ${client.guilds.cache.size} servidores y  ${client.users.cache.size} usuarios.`);
  
     let statuses = [
               `Nyanbot!`,
               "!help",
               "Estoy en " + client.guilds.cache.size + " servidores",
               "Tengo " + client.users.cache.size + " usuarios",
           ]
const embed = new Discord.MessageEmbed()
setInterval(function() {
           let status = statuses[Math.floor(Math.random() * statuses.length)];
           client.user.setActivity(status, {type: "PLAYING"});
       }, 5000)


});




client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

// Add bot login here.
client.login(process.env.token);
