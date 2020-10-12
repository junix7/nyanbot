const Discord = require('discord.js');
const client = new Discord.Client();
//require('dotenv').config();
const cooldown = new Set()



// Add bot login here.
client.login('NjczMjA3NTY0NjExMjIzNTYz.XjWrZg.M2MOlUU9A_8gaf4KuHqex8zrwQo');


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

//COMANDO AMENO----------------------------
if(command === 'ameno'){
  if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")
let number = 3;
let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
const embed = new Discord.MessageEmbed()
.setTitle('ameno')
      .setColor("RANDOM")
      .attachFiles([img + '/ameno'+ imageNumber + '.jpg'])
      .setImage(`attachment://ameno${imageNumber}.jpg`);
      message.channel.send(embed);
 
cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms

}


//COMANDO AVATAR ------
if(command === 'avatar'){
   if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")
    let usuario = message.mentions.members.first() || message.member;
    let avatar = usuario.user.displayAvatarURL({size: 4096, dynamic: true});
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`Avatar del usuario ${usuario.user.username}`)
    .setImage(avatar)
    return message.channel.send(embed);

    cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms

  }
  

//COMANDO BAKA---------------------------
if(command === 'baka'){
    if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")
   let number = 5;
     let   imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        const embed = new Discord.MessageEmbed()
        .setTitle(message.author.username + ' Dice que eres baka ＞︿＜ !!!')
        .setColor("RANDOM")
        .attachFiles([img + '/baka'+ imageNumber + '.gif'])
        .setImage(`attachment://baka${imageNumber}.gif`);
        message.channel.send(embed);

         cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms
}

  //----------------------------------//
  //COMANDO PING
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix +"hola")) {
    message.channel.send("Hola que tal?");
  }

 


 //COMANDO SERVER
  if(command === 'server'){
     if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

    var server = message.guild;
const embed = new Discord.MessageEmbed()
.setThumbnail(server.iconURL)
    .setAuthor(server.name, server.iconURL)
    .addField('ID', server.id, true)
    .addField('Region', server.region, true)
    .addField('Creado el', server.joinedAt.toDateString(), true)
    .addField('Dueño del Servidor', server.owner.user.username+'#'+server.owner.user.discriminator+' ('+server.owner.user.id +')', true)
    .addField('Miembros', server.memberCount, true)
    .addField('Roles', server.roles.size, true)
    .setColor("RANDOM")
   message.channel.send(embed);

     cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms
  }

  //COMANDO USER___________________
  if(command === 'user'){
  if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

    const userm = message.mentions.users.first()
    if(!userm){
      var user = message.author;
         const embed = new Discord.MessageEmbed()
        .setAuthor(user.username + '#' + user.discriminator, user.avatarURL)
        .addField('ID', user.id, true)
        .addField('Estado', user.presence.status, true)
        .addField('Cuenta Creada', user.createdAt.toDateString(), true)
        .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
        .setColor("RANDOM")

       message.channel.send({ embed });
    }else{
       const embed = new Discord.MessageEmbed()
      .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
      .addField('ID', userm.id, true)
      .addField('Estado', userm.presence.status, true)
      .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
      .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
      .setColor("RANDOM")
     message.channel.send(embed);
    }

     cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms

  }


  //COMANDO REGLAS
  if(command === 'reglas'){
    
     if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")
     const embed = new Discord.MessageEmbed()
            .setTitle('Reglas')
            .setColor("RANDOM")
            .setAuthor('Nyan', 'https://media.discordapp.net/attachments/634066814426546231/673226366338072596/main.pngcompresstrue.png')
            .addField('Regla #1', 'No faltar el respeto')
            .addField('Regla #2', 'No spam')
            .addField('Regla #3', 'No acosar')
            .addField('Regla #4', 'No abusar de los bots')
            .addField('Regla #5', 'No gente toxica');
             message.channel.send(embed);

               cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms

}



//COMANDO KROMIA----------------------------
if(command === 'kromia'){
if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

let number = 10;
let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
const embed = new Discord.MessageEmbed()
.setTitle('Toma tu imagen de kromia!! ≧ω≦')
      .setColor("RANDOM")
      .attachFiles([img + '/kromia'+ imageNumber + '.jpg'])
      .setImage(`attachment://kromia${imageNumber}.jpg`);
      message.channel.send(embed);

              cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms

 
}


 //COMANDO BLUSH
if(command === 'blush'){

  if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")
 let   number = 6;
    let    imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
         const embed = new Discord.MessageEmbed()
         .setTitle(message.author.username + ' se sonroja o///o')
         .setColor("RANDOM")
        .attachFiles(['images/blush'+ imageNumber + '.gif'])
         .setImage(`attachment://blush${imageNumber}.gif`);
        message.channel.send(embed);

                    cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms
}

//COMANDO HAPPY
if(command === 'happy'){
   if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

  let  number = 2;
     let   imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        const embed = new Discord.MessageEmbed()
        .setTitle(message.author.username + ' se pone feliz :3 ')
        .setColor("RANDOM")
        .attachFiles([img + '/happy'+ imageNumber + '.gif'])
         .setImage(`attachment://happy${imageNumber}.gif`);
        message.channel.send(embed);

  cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms
}



 //COMANDO CRY
if(command === 'cry'){
   if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

  let  number = 6;
    let    imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        const embed = new Discord.MessageEmbed()
        .setTitle(message.author.username + ' se pone a llorar :c ')
        .setColor("RANDOM")
        .attachFiles([img + '/cry'+ imageNumber + '.gif'])
        .setImage(`attachment://cry${imageNumber}.gif`);
        message.channel.send(embed);

         cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms
}

//COMANDO CLAPS
if(command === 'claps'){
   if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

   let number = 6;
    let    imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        const embed = new Discord.MessageEmbed()
        .setTitle(message.author.username + ' se pone a aplaudir ●ω●')
        .setColor("RANDOM")
        .attachFiles([img + '/claps'+ imageNumber + '.gif'])
       .setImage(`attachment://claps${imageNumber}.gif`);
        message.channel.send(embed);

                cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms
}

if (command === "cookie") {
   if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

    let user = message.mentions.users.first() || message.author;

    let aloneEmbed = new Discord.MessageEmbed();

    if (!user)
      return message.reply(
        "Menciona si quieres darle una galleta a alguien mas >w<♥"
      );

    if (user.id === message.author.id)
      return message.channel.send(
        "**" +
          message.author.username +
          "** Toma una galleta.. :cookie: de mi parte ♥ "
      );

    message.channel.send(
      "**" +
        message.author.username +
        " ** le da una galleta \n(づ｡◕‿‿◕｡)づ:･ﾟ✧ :cookie: a  **" +
        user.username +
        "**"
    );

                  cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms
  }






  //COMANDO HI
if(command === 'hi'){
   if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

  let  number = 2;
    let    imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
         const embed = new Discord.MessageEmbed()
        .setTitle('Holaaaaaaa ∩ω∩')
        .setColor("RANDOM")
        .attachFiles([img + '/hi'+ imageNumber + '.gif'])
        .setImage(`attachment://hi${imageNumber}.gif`);
        message.channel.send(embed);

                          cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms
}







//COMANDO DAB
if(command === 'dab'){
  if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

 let number = 5;
  let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
       const embed = new Discord.MessageEmbed()
      .setTitle(message.author.username +' hizo un dab épico!!')
      .setColor("RANDOM")
      .attachFiles([img + '/dab'+ imageNumber + '.gif'])
      .setImage(`attachment://dab${imageNumber}.gif`);
      message.channel.send(embed);

                                cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms
}

//COMANDO SLEEP
if(command === 'sleep'){
   if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

 let number = 5;
  let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
       const embed = new Discord.MessageEmbed()
      .setTitle(message.author.username +' se va a mimir zZz')
      .setColor("RANDOM")
      .attachFiles([img + '/sleep'+ imageNumber + '.gif'])
      .setImage(`attachment://sleep${imageNumber}.gif`);
      message.channel.send(embed);

                                     cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms
}

//COMANDO BYE
if(command === 'bye'){
     if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

 let number = 6;
   let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
       const embed = new Discord.MessageEmbed()
      .setTitle(message.author.username +' se va un ratito!! (^^)/')
      .setColor("RANDOM")
      .attachFiles([img + '/bye'+ imageNumber + '.gif'])
      .setImage(`attachment://bye${imageNumber}.gif`);
      message.channel.send(embed);

   cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms
}

//COMANDO HUG
  if(command === 'hug'){
       if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

  let number = 6;
    let  imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        let img = message.mentions.users.first()
      if (!img) {
          const embed = new Discord.MessageEmbed()
          .setTitle('Abrazo para  '+ message.author.username + '  >w<!!')
          .setColor("RANDOM")
          .attachFiles(['images/hug'+ imageNumber + '.gif'])
           .setImage(`attachment://hug${imageNumber}.gif`);
          message.channel.send(embed);

      }  else {
          const embed = new Discord.MessageEmbed()
          .setTitle('Hey '+ message.author.username + ' te envía un abrazo   >w<')
           .setColor("RANDOM")
          .attachFiles(['images/hug'+ imageNumber + '.gif'])
         .setImage(`attachment://hug${imageNumber}.gif`);
          message.channel.send(embed);
            }

             cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms
}


//COMANDO CUDDLE

  if(command === 'cuddle'){
       if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

 
  let number = 6;
    let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;

        let img = message.mentions.users.first()
      if (!img) {
         const embed = new Discord.MessageEmbed()
         .setTitle('¿'+ message.author.username + ' te gusta estar asi de cerca? ≧﹏≦')
         .setColor("RANDOM")
          .attachFiles(['images/cuddle'+ imageNumber + '.gif'])
          .setImage(`attachment://cuddle${imageNumber}.gif`);
          message.channel.send(embed);

      }  else {
        const embed = new Discord.MessageEmbed()
        .setTitle(message.author.username +'  te da muchos mimos  '   + img.username + '  ≧﹏≦ !!!')
        .setColor("RANDOM")
         .attachFiles(['images/cuddle'+ imageNumber + '.gif'])
         .setImage(`attachment://cuddle${imageNumber}.gif`);
          message.channel.send(embed);
            }
   cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms
}

//COMANDO KISS

  if(command === 'kiss'){
     if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

  let number = 6;
     let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;

        let img = message.mentions.users.first()
      if (!img) {
          const embed = new Discord.MessageEmbed()
          .setTitle('Nyanbot te da un beso ≧ω≦ <3 ' + message.author.username)
          .setColor("RANDOM")
          .attachFiles(['images/kiss'+ imageNumber + '.gif'])
         .setImage(`attachment://kiss${imageNumber}.gif`);
          message.channel.send(embed);

      }  else {
          const embed = new Discord.MessageEmbed()
          .setTitle(message.author.username + ' te envía un beso,  ' + img.username + '  ≧ω≦ <3')
          .setColor("RANDOM")
          .attachFiles(['images/kiss'+ imageNumber + '.gif'])
        .setImage(`attachment://kiss${imageNumber}.gif`);
          message.channel.send(embed);
            }

             cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms
}


//COMANDO PAT

  if(command === 'pat'){
      if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

  let number = 6;
     let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;

        let img = message.mentions.users.first()
      if (!img) {
          const embed = new Discord.MessageEmbed()
          .setTitle('Te acaricio un poquito  ' + message.author.username + ' ∪﹏∪')
           .setColor("RANDOM")
          .attachFiles(['images/pat'+ imageNumber + '.gif'])
          .setImage(`attachment://pat${imageNumber}.gif`);
          message.channel.send(embed);

      }  else {
           const embed = new Discord.MessageEmbed()
            .setTitle(message.author.username + ' acaricia a ' + img.username + ' ∪﹏∪')
             .setColor("RANDOM")
          .attachFiles(['images/pat'+ imageNumber + '.gif'])
         .setImage(`attachment://pat${imageNumber}.gif`);
          message.channel.send(embed);
            }
   cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms
}

//COMANDO BITE
  if(command === 'bite'){
         if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

 let  number = 6;
    let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;

        let img = message.mentions.users.first()
      if (!img) {
           const embed = new Discord.MessageEmbed()
        .setTitle('Hey  '+ message.author.username +'  te voy a morder ≧△≦ !!!')
        .setColor("RANDOM")
          .attachFiles(['images/bite'+ imageNumber + '.gif'])
          .setImage(`attachment://bite${imageNumber}.gif`);
          message.channel.send(embed);

      }  else {
           const embed = new Discord.MessageEmbed()
        .setTitle(message.author.username + ' ha mordido a '+ img.username +' ≧△≦')
             .setColor("RANDOM")
           .attachFiles(['images/bite'+ imageNumber + '.gif'])
          .setImage(`attachment://bite${imageNumber}.gif`);
          message.channel.send(embed);
            }
             cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms
}

//COMANDO RIP
  if(command === 'rip'){
      if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

  let number = 3;
     let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;

        let img = message.mentions.users.first()
      if (!img) {
           const embed = new Discord.MessageEmbed()
            .setTitle('Te mueres :c    ' + message.author.username)
            .setColor("RANDOM")
          .attachFiles(['images/rip'+ imageNumber + '.gif'])
           .setImage(`attachment://rip${imageNumber}.gif`);
          message.channel.send(embed);

      }  else {
        const embed = new Discord.MessageEmbed()
         .setFooter(message.author.username + ' te ve morir :o    '+ img.username)
         .setColor("RANDOM")
         .attachFiles(['images/rip'+ imageNumber + '.gif'])
          .setImage(`attachment://rip${imageNumber}.gif`);
          message.channel.send(embed);
            }

                 cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms
}

//COMANDO DANCE
  if(command === 'dance'){
      if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

   let number = 6;
      let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        const embed = new Discord.MessageEmbed()
        .setTitle(message.author.username + ' se puso a bailar!!! ●﹏● ')
        .setColor("RANDOM")
        .attachFiles([img + '/dance'+ imageNumber + '.gif'])
        .setImage(`attachment://dance${imageNumber}.gif`);
        message.channel.send(embed);

   cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms
}

//COMANDO CAT
if(command === 'cat'){
      if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

   let number = 3;
      let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        const embed = new Discord.MessageEmbed()
        .setTitle('Aquí tienes la imagen de un gatito >w< ' + message.author.username)
        .setColor("RANDOM")
        .attachFiles([img + '/cat'+ imageNumber + '.gif'])
         .setImage(`attachment://cat${imageNumber}.gif`);
           message.channel.send(embed);

             cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms
}


//COMANDO DOG
if(command === 'dog'){
   if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

   let number = 3;
      let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
       const embed = new Discord.MessageEmbed()
       .setTitle('Aquí tienes la imagen de un perrito >w<' + message.author.username)
      .setColor("RANDOM")
        .attachFiles([img + '/dog'+ imageNumber + '.gif'])
        .setImage(`attachment://dog${imageNumber}.gif`);
          message.channel.send(embed);


  cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms
}
//COMANDO WAIFU
if(command === 'waifu'){
   if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

   let number = 10;
      let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
         message.channel.send({ files: [img + "/waifu" + imageNumber + ".gif"]})
        switch (imageNumber) {
        case 1:
            message.channel.send(`${message.author} Tu waifu es Hifumi! `);

        break;
        case 2:
            message.channel.send(`${message.author} Tu waifu es Aoba!`);

        break;
        case 3:
            message.channel.send(`${message.author} Tu waifu es Taiga!`);

        break;
        case 4:
            message.channel.send(`${message.author} Tu waifu es Loise!`);

        break;
        case 5:
            message.channel.send(`${message.author} Tu waifu es Emilia!`);

        break;
        case 6:
            message.channel.send(`${message.author} Tu waifu es Nao Tomori!`);

        break;
        case 7:
            message.channel.send(`${message.author} Tu waifu es Rem!`);

        break;
        case 8:
            message.channel.send(`${message.author} Tu waifu es Urakara!`);

        break;
        case 9:
            message.channel.send(`${message.author} Tu waifu es Kushieda!`);

        break;
        case 10:
            message.channel.send(`${message.author} Tu waifu es Raphtalia!`);

        break;
        default:
            console.log('error',imageNumber);
        }

         cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms

}

//COMANDO SLAP

  if(command === 'slap'){
    if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

  let number = 6;
     let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;

        let img = message.mentions.users.first()
      if (!img) {
         const embed = new Discord.MessageEmbed()
          .setTitle('Te voy a dar una golpiza ' + message.author.username + ' !!!')
        .setColor("RANDOM")
          .attachFiles(['images/slap'+ imageNumber + '.gif'])
         .setImage(`attachment://slap${imageNumber}.gif`);
          message.channel.send(embed);

      }  else {
          const embed = new Discord.MessageEmbed()
          .setTitle(message.author.username + ' ha golpeado a ' + img.username + ' >o<')
          .setColor("RANDOM")
           .attachFiles(['images/slap'+ imageNumber + '.gif'])
           .setImage(`attachment://slap${imageNumber}.gif`);
          message.channel.send(embed);
            }

                   cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms

}

//COMANDO LICK

  if(command === 'lick'){
     if(cooldown.has(message.author.id)) return message.channel.send("Espera unos segundos para volver a enviar un mensaje")

  let number = 6;
     let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;

        let img = message.mentions.users.first()
      if (!img) {
         const embed = new Discord.MessageEmbed()
          .setTitle('Hey '+ message.author.username +' , Nyanbot te lame o///o')
        .setColor("RANDOM")
          .attachFiles(['images/lick'+ imageNumber + '.gif'])
         .setImage(`attachment://lick${imageNumber}.gif`);
          message.channel.send(embed);

      }  else {
          const embed = new Discord.MessageEmbed()
          .setTitle(message.author.username + '  está lamiendo a  ' + img.username + '  o///o')
          .setColor("RANDOM")
           .attachFiles(['images/lick'+ imageNumber + '.gif'])
           .setImage(`attachment://lick${imageNumber}.gif`);
          message.channel.send(embed);
            }


  cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 10000) //1 seg = 1000ms
}









// COMANDO DE BIENVENIDAS

client.on('guildMemberAdd',member => {
    const welcome = member.guild.channels.cache.find(welcome => welcome.name === "📣chat-general");
    if (!welcome) return;
    welcome.send(`Bienvenid@ al servidor de NyanCode!!! ${member}`);
});


  //AQUI TERMINAN LOS COMANDOS
});






