import {Telegraf} from "telegraf";

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

const web_link = "https://golden-flan-135f29.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Расшифруйте особенности вашего тела, узнайте что на вас влияет, какая у вас стратегия жизни, какие камни вам подходят и многое другое", {
    reply_markup: {
      keyboard: [[{text: "swami", web_app: {url: web_link}}]],
    },
  })
);

bot.launch();