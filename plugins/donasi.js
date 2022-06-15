let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
››╭─〘 *Donasi* 〙
╭╡📮: Donasi ngab jgan gunain doang.
│┝‷✧ *Ovo:* [085828764046]
│┝‷✧ *Dana:* [085828764046]
│┝‷✧ *Gopay:* [085828764046]
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat nomor owner
╰──────────···───
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
