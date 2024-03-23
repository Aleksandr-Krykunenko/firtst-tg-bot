import { Telegraf } from "telegraf"
import { message } from "telegraf/filters"

const bot = new Telegraf("6752689709:AAH1M618npo0-i-0frM-LDyXrvFq9asNngU")
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey pidor'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))