let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [FREE]
│ • Telkomsel [FREE]
╰────

╭─「 Donasi • Non Pulsa 」
│ • FREE
│ • Gopay [FREE]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
