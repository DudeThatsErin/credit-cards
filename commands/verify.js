const Discord = require('discord.js');

module.exports = {
    name: 'verify',
    description: 'Fucks with people',
    aliases: ['join', 'fuck-with-me'],
    usage: '!verify',
    async execute (message, args) {

        let author = message.author;

        author.send('Thanks for joining the Credit Cards Discord Server! I understand you are trying to get access to the rest of the server. Well, you must be a spammer or someone who is incredibly lazy and *does not* want to read the pinned messages or scroll up in the <#823320169442967552> channel. Either way, we are not going to give you access because more than likely you are looking for a hand-out. Why don\'t you get off your ass and get a fucking job like the rest of the world instead of trying to look for a handout.\n\nPlease leave our discord server before our mod team bans you. Have a nice life moron!');

        message.reply('📨 I sent you a DM, please check it!');

    }
}