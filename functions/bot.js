const {Telegraf} = require('telegraf');
const Airtable = require('airtable');

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_TOKEN
});

const airtable = Airtable.base('appAB6mLnImrAFBWa');
const bot = new Telegraf(process.env.BOT_TOKEN);

const web_link = 'https://golden-flan-135f29-6b0ef8.netlify.live/';

bot.start((ctx) => {
  console.log(ctx);
  console.log(members);
  const members = airtable('Members');
  // await members.select({maxRecords: 1, filterByFormula: `NOT({Telegram} = '${}')`}).firstPage();

  return ctx.reply('Найди нужную практику, узнай расписание и забронируйте место', {
    reply_markup: {
      inline_keyboard: [
        [{
          text: 'Запустить приложение',
          web_app: {url: web_link}
        }, {
          text: 'Стать Свами',
        }],
      ],
    },
  });
});

exports.handler = async (event) => {
  try {
    await bot.handleUpdate(JSON.parse(event.body)).then(() => {
      console.log('Received an update from Telegram!', event.body);
    });
    return {statusCode: 200};
  } catch (e) {
    console.log(e);
    return {statusCode: 400};
  }
};

