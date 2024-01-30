'use strict'

const Translator = require('../components/translator.js')

module.exports = function (app) {
  const translator = new Translator()

  app.route('/api/translate').post((req, res) => {
    const { text, locale } = req.body

    console.log('\n\t---- POST /api/translate ----\n')
    console.log(`\ttext: ${text}\n\tlocale: ${locale}`)

    if (text == undefined || locale == undefined) {
      return res.json({ error: 'Required field(s) missing' })
    }
    if (!text) {
      return res.json({ error: 'No text to translate' })
    }
    if (!locale) {
      return res.json({ error: 'Invalid field for locale field' })
    }

    if (locale !== 'american-to-british' && locale !== 'british-to-american') {
      return res.json({ error: 'Invalid value for locale field' })
    }

    const result = translator.translate(text, locale)
    console.log(
      `\n\tmode: ${locale}\n\tinput text: ${text} \n\tTranslated: ${result}\t`
    )
    return res.json({ text: text, translation: result })
  })
}
