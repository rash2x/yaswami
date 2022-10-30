const {Telegraf} = require('telegraf');
const Airtable = require('airtable');

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_TOKEN
});

const airtable = Airtable.base('appAB6mLnImrAFBWa');
const bot = new Telegraf(process.env.BOT_TOKEN);
const membersTable = airtable('Members');

bot.start(async (ctx) => {
  console.log(ctx);
  console.log(ctx.update.message.from);
  console.log(membersTable);

  const user = await membersTable.select({maxRecords: 1, filterByFormula: `{Id}='${ctx.update.message.from.id}'`}).firstPage();

  console.log(user);

  if(!user || (Array.isArray(user) && user.length === 0)) {
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
  } else {
    return ctx.reply('Ты уже зарегистрирован!' + user.Phone);
  }
});

bot.on('contact', async (ctx) => {
  const {from, contact} = ctx.message;
  const userPhotos = await ctx.telegram.getUserProfilePhotos(from.id);
  const photoFile = await ctx.telegram.getFile(userPhotos.photos[0][0].file_id);
  console.log(photoFile);

  const fields = {
    'Phone': contact.phone_number,
    'Name': `${from.first_name} ${from.last_name}`,
    'Telegram': from.username,
    'Id': from.id,
    'PhotoUrl': photoFile.file_path
  };

  console.log(fields);

  await membersTable.create([{fields}], (err, records) => {
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

