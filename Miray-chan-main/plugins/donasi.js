let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Dana/ovo: [085890216240]
│ • Pulsa Axis: [083877335693]
│ 
│ 「 Chat OWNER 」
│ ➵ Ingin donasi?
│ ➵ Wa.me/6285890216240
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
