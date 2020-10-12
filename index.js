const Discord = require('discord.js');
const client = new Discord.Client();
//require('dotenv').config();
const cooldown = new Set()



// Add bot login here.
client.login('NjczMjA3NTY0NjExMjIzNTYz.XjWrjw.EDRDcOMWNoTWnUxizWi-L5s_Dts');


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


/*client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});*/


var prefix = "!";
var img = "images";

client.on("message", (message) => {

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

        //AQUI EMPIEZAN LOS COMANDOS
        //COMANDOS DE HELP
        if(message.content.startsWith(prefix + 'help')){

    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.≧﹏≦');
    message.author.send('**COMANDOS DE NYANBOT**\n```\n'+


 //LISTA DE COMANDOS >2<
     '-> '+prefix+'8ball          :: Nyanbot responde a tus preguntas.\n'+
     '-> '+prefix+'ameno          :: ameno dorime   .\n'+
     '-> '+prefix+'avatar <@user> :: Muestra el avatar de un usuario.\n'+
     '-> '+prefix+'baka  <@user>  :: dice que eres baka owo.\n'+
     '-> '+prefix+'bite  <@user>  :: te muerde owx.\n'+
     '-> '+prefix+'blush          :: te sonrrojas.\n'+
     '-> '+prefix+'bye            :: imagen anime despide  .\n'+
     '-> '+prefix+'cat            :: Imagen de un gatito random.\n'+
     '-> '+prefix+'claps <@user>  :: aplaudes :3  .\n'+
     '-> '+prefix+'cry            :: te pones a llorar :c.\n'+
     '-> '+prefix+'cookie         :: Toma una galletita! .\n'+
     '-> '+prefix+'cuddle <@user> :: te da mimos :3  .\n'+
     '-> '+prefix+'dab            :: toma tu dab!!  .\n'+
     '-> '+prefix+'dance          :: Nyanbot baila.\n'+
  
     '-> '+prefix+'dog            :: Imagen de un perrito random.\n'+
     '-> '+prefix+'happy          :: te pones feliz :3.\n'+
     '-> '+prefix+'hi             :: imagen anime saludando  .\n'+
     '-> '+prefix+'hola           :: Retorna un saludo como mensaje.\n'+
     '-> '+prefix+'hug   <@user>  :: Nyanbot da un abrazo.\n'+
     '-> '+prefix+'kiss  <@user>  :: te envía un beso!.\n'+
     '-> '+prefix+'kromia         :: Imagen de Kromia random.\n'+
     '-> '+prefix+'lick  <@user>  :: te lamen o//o  .\n'+
     '-> '+prefix+'pat   <@user>  :: te acaricia.\n'+
     '-> '+prefix+'ping           :: Comprueba la latencia .\n'+
     '-> '+prefix+'rip   <@user>  :: te suicidas!.\n'+
     '-> '+prefix+'server         :: Muestra información del servidor.\n'+
     '-> '+prefix+'slap  <@user>  :: te envía un golpe!.\n'+
     '-> '+prefix+'sleep          :: te vas a mimir  .\n'+
     '-> '+prefix+'user <@user>   :: Muestra información de usuario.\n'+
     '-> '+prefix+'waifu          :: veamos quien es tu waifu.\n'+
     '-> '+prefix+'reglas         :: reglas del servidor.\n```\n\n'
);
  }

  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

//INICIO DE LOS COMANDOS >2<

 //COMANDO 8BALL---------------------------
 if(command === '8ball'){
  if(!args[2]){
      return message.channel.send(`Escriba una pregunta.`);
  }
     var rpts = ["Sí", "No", "¿Por qué?", "Por favor", "Tal vez", "No sé", "Definitivamente?", " ¡Claro! "," Sí "," No "," Por supuesto! "," Por supuesto que no "];

     message.channel.send(message.author.username +' mi respuesta es:'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');

 }









