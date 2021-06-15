const { Client } = require("discord.js") // chamando a biblioteca, que iremos usar para fazer o bot em JS (tem varias..)
const bot = new Client(); // criando a class do client (bot).

bot.on("ready", () => { // não iremos colocar um paramêtro aqui, pois não é preciso.
  console.log("bot foi ligado.")
}) // aqui é o primeiro evento que iremos usar, "ready" ele sempre será ativo quando o bot reiniciar/iniciar.

bot.on("message", (message) => { // aqui iremos definir um paramêtro, para usar-mos o evento.
  if(message.author.bot) return; // aqui iremos detectar, se for um bot que mandou a mensagem, se for ele não irá responder, você pode tirar caso seu bot seja śo para bots.
  const prefix = "/"

  const args = message.content.slice(prefix.length).trim().split(/ +/g) // aqui iremos criar uma variavel onde armaneza os argumentos, que irá ser detectado pelo bot.
  const command = args.shift().toLowerCase() // aqui não tem muito oque falar, mas ele vai tirar o primeiro argumento, que é o prefixo, para executar o comando.
  
  if(command == "ping") { // criando um comando, (você pode colocar qualquer nome, desde que seja dentro da String)
    return message.channel.send("pong!") // aqui ele está respondendo ao o argumento junto do prefixo, que será enviado pelo usuário.
  }
}) // aqui é o segundo evento, e uns dos mais essenciais, sobre comandos e etc. e sempre será ativo quando uma nova mensagem for detectada em um canal/DM

bot.login("") // aqui, irá iniciar uma instancia na API com o token do bot no client.
