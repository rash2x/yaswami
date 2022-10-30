const {Telegraf} = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
const web_link = 'https://golden-flan-135f29-6b0ef8.netlify.live/';

bot.start((ctx) => {
  return ctx.reply('Найди нужную практику, узнай расписание и забронируйте место', {
    reply_markup: {
      inline_keyboard: [
        [{
          text: 'Запустить приложение',
          web_app: {url: web_link}
        }, {
          text: 'Стать Свами',
          login_url: {
            url: 'https://yaswami.com',
            forward_text: 'Стать Свами',
            bot_username: 'yaswami_bot',
            request_write_access: 'true'
          }
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

