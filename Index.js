const Discord = require("discord.js");

const Client = new Discord.Client;

const ytdl = require("ytdl-core");

const prefix = "?";

Client.login("ODM5ODgzMTE1NjA2NDQyMDM1.YJQIGw.dylD_EX4CxocfjLB0tsVbRgxDU4");

Client.on("ready", () => {
     console.log("bot oppérationel");
});

Client.on("message", message => {
if(message.author.bot) return;
if(message.channel.type == "dm") return;

if(message.content == prefix + "lien"){
message.channel.send("**Salut ! le lien de l'entreprise est: http://virtualtruckingmanager.com/company/38310. :heart: **");
}
if(message.content == prefix + "reseaux"){
message.channel.send("**Salut ! Mes reseaux sociaux sont : Snap : axelelbg83 Insta : axel.ecrit.3 Youtube :zartoxx 2** :slight_smile:")    
}
if(message.content.startsWith(prefix + "play")){
     if(message.member.voice.channel){
          message.member.voice.channel.join().then(connection => {
               let args = message.content.split(" ");
               let dispatcher = connection.play(ytdl(args[1], { quality: "highestaudio" }));
               dispatcher.on("finish", () => {
                    dispatcher.destroy();
                    connection.disconnect();
               });
               dispatcher.on("error", err => {
                    console.log("Erreur de dispatcher : " + err);
               });

          }).catch(err => {
               messages.reply("Erreur lors de la connection : " + err);
          });

     }
     else {
          message.reply("**vous n'êtes pas connecté en vocal**")
     }

}
});