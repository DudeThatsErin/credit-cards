module.exports = {
  name: 'ping',
  description: 'Makes sure the bot can hear commands.',
  aliases: ['uptime', 'beep', 'boop', 'alive'],
  usage: 's!ping',
  inHelp: 'yes',
  execute(message, args) { 
    let days = Math.floor(message.client.uptime / 86400000);
    let hours = Math.floor(message.client.uptime / 3600000) % 24;
    let minutes = Math.floor(message.client.uptime / 60000) % 60;
    let seconds = Math.floor(message.client.uptime / 1000) % 60;

   message.channel.send(`🏓 Pong! I have been awake for ${days}d ${hours}h ${minutes}m ${seconds}s`);
  }
};