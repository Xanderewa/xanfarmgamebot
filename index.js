const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const PORT = 3000;

// 🌐 Endpoint base para monitoreo
app.get('/', (req, res) => {
  res.status(200).send('Bot de XanFarm (juego) activo 🚀');
});

app.listen(PORT, () => {
  console.log(`✅ Servidor Express activo en puerto ${PORT}`);
});

// 🔐 Usar token desde variables de entorno
const bot = new TelegramBot(process.env.TOKEN, { polling: true });

// 🎮 Comando /start con botón para jugar
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

// ⏰ Ping periódico para mantener activo
setInterval(() => {
  console.log('Ping interno para mantener activo el bot ✅');
}, 10000);
