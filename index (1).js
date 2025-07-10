const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Bot de XanFarm (juego) activo 🚀');
});

app.listen(PORT, () => {
  console.log(`✅ Servidor Express activo en puerto ${PORT}`);
});

const bot = new TelegramBot('7572757628:AAFbZaoZ-5gjUZNdFIKbnIAAtK79l7oaLbY', { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '🌾 ¡Bienvenido a XanFarm!\nTocá el botón para comenzar tu aventura:', {
    reply_markup: {
      inline_keyboard: [[
        {
          text: '🚜 Jugar XanFarm',
          web_app: { url: 'https://xanfarm-clicker.vercel.app' }
        }
      ]]
    }
  });
});

// ⏰ Ping automático cada 10 segundos para simular actividad
setInterval(() => {
  console.log('Ping interno para mantener activo el bot ✅');
}, 10000);