const {Telegraf} = require('telegraf');
const Airtable = require('airtable');

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_TOKEN
});

const airtable = Airtable.base('appAB6mLnImrAFBWa');
const bot = new Telegraf(process.env.BOT_TOKEN);
const membersTable = airtable('Members');

bot.start((ctx) => {

  console.log(ctx);
  console.log(ctx.update.message.from);
  console.log(membersTable);

  // await members.select({maxRecords: 1, filterByFormula: `NOT({Telegram} = '${}')`}).firstPage();
  return ctx.reply('Начинаем! Давай зарегистрируемся чтобы запустить бота. Помни, нажимая кнопку Стать Свами, ты соглашаешься, что начинаешь идти по пути познания себя!', {
    reply_markup: {
      keyboard: [
        [{
          text: 'Стать Свами 🧘',
          request_contact: true
        }]
      ],
      one_time_keyboard: true,
    },
  });
});

bot.on('contact', (ctx) => {
  console.log(ctx);
  const fields = {
    'Phone': ctx.message.contact.phone_number,
    'Name': `${ctx.message.from.first_name} ${ctx.message.from.last_name}`,
    'Telegram': ctx.message.from.username,
    'Id': ctx.message.from.id,
  };

  membersTable.create([{fields}], (err, records) => {
    if (err) {
      console.error(err);
      return;
    }

    records.forEach(function (record) {
      console.log(record.getId());
    });
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

