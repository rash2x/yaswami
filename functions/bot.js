const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
const web_link = "https://golden-flan-135f29.netlify.app/";

bot.start((ctx) => {
  console.log(ctx);

  return ctx.reply("Расшифруйте особенности вашего тела, узнайте что на вас влияет, какая у вас стратегия жизни, какие камни вам подходят и многое другое", {
    reply_markup: {
      keyboard: [[{text: "swami", web_app: {url: web_link}}]],
    },
  })
});

exports.handler = async (event) => {
  try {
    await bot.handleUpdate(JSON.parse(event.body));
    console.log("Received an update from Telegram!", event.body);
    return {statusCode: 200};
  } catch (e) {
    return {statusCode: 400};
  }
};

