const { Composer } = require('micro-bot');
const spotifySearch = require('./lib/spotifySearch');

// the bot
const bot = new Composer();

// start command
bot.command('/start', async ({ from, replyWithMarkdown, botInfo }) =>
  replyWithMarkdown(`Hi *${from.first_name || from.username}* !

Welcome, i am *${botInfo.first_name}*, a melophile just like you.

To share a song simply type @${botInfo.username} 
and type the *name of the song* you want to share.`));

// inline query for music search
bot.on('inline_query', async ({ inlineQuery, answerInlineQuery }) => {
  const offset = parseInt(inlineQuery.offset, 10) || 0;
  const query = inlineQuery.query || '';
  if (query.length > 2) {
    const result = await spotifySearch(query);
    return answerInlineQuery(result, { next_offset: offset + 30 });
  }
});

module.exports = bot;
