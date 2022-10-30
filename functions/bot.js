const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
const web_link = "https://golden-flan-135f29-6b0ef8.netlify.live/";

bot.start((ctx) => {
  return ctx.reply("Расшифруйте особенности вашего тела, узнайте что на вас влияет, какая у вас стратегия жизни, какие камни вам подходят и многое другое", {
    reply_markup: {
      keyboard: [[{text: "События", web_app: {url: web_link}}]],
    },
  })
});

exports.handler = async (event) => {
  try {
    await bot.handleUpdate(JSON.parse(event.body)).then(() => {
      console.log("Received an update from Telegram!", event.body);
    });
    return {statusCode: 200};
  } catch (e) {
    return {statusCode: 400};
  }
};

