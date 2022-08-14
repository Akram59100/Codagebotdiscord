const { MessageEmbed } = require('discord.js');

module.exports = {
    run: async (client, message, args) => {
        const res = new MessageEmbed()
        .setAuthor(`Commandes bot`, client.user.avatarURL({dynamic: true}))
        .setFooter(client.user.username, client.user.avatarURL({dynamic: true}))
        .setThumbnail(client.user.avatarURL({dynamic: true}))
        .setTimestamp()
        .addField(`a?avatar 📷`,`Permet de voir l'avatar d'une personne`)
        .setColor('#00000');
    message.channel.send({ embeds: [res]});
    },
    name: 'help',
    aliases: [],
    description: 'commande de test'
}
