const americanOnly = require('./american-only.js')
const americanToBritishSpelling = require('./american-to-british-spelling.js')
const americanToBritishTitles = require('./american-to-british-titles.js')
const britishOnly = require('./british-only.js')

class Translator {
  translate(text, locale) {
    const titles =
      locale === 'american-to-british'
        ? americanToBritishTitles
        : this.reverse(americanToBritishTitles)
    const spelling =
      locale === 'american-to-british'
        ? { ...americanToBritishSpelling, ...americanOnly }
        : { ...this.reverse(americanToBritishSpelling), ...britishOnly }

    const matches = new Set()
    let translated = false
    for (const key of Object.keys(titles)) {
      const word = key.replace('.', '\\.')
      const re = new RegExp(`\\b${word}\\s`, 'gi')
      if (text.match(re)) {
        translated = true
        matches.add(key)
      }
    }

    // translate spelling and phrases
    for (const key of Object.keys(spelling)) {
      const re = new RegExp(`\\b${key}\\b`, 'gi')
      if (text.match(re)) {
        translated = true
        matches.add(key)
      }
    }

    // make a map for
    const translations = {}
    ;[...matches].forEach((item) => {
      const word = spelling[item] || titles[item]
      translations[item] = word

      const spacedWord = item.split(' ')
      for (let i = 0; i < spacedWord.length; i++) {
        spacedWord[i] = this.capitalized(spacedWord[i])
        translations[spacedWord.join(' ')] = this.capitalized(word)
      }
    })

    for (const wordToTranslate of Object.keys(translations)) {
      text = text.replace(
        wordToTranslate,
        this.wrapInSpan(translations[wordToTranslate])
      )
    }

    // handle time formatting
    text = text.replace(/[0-9]+[:.]{1}[0-9]+/, (time) => {
      translated = true
      return this.wrapInSpan(this.formatTime(time, locale))
    })

    if (!translated) return 'Everything looks good to me!'
    return text
  }

  capitalized(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  reverse(collection) {
    const map = {}
    for (const key of Object.keys(collection)) {
      map[collection[key]] = key
    }
    return map
  }

  formatTime(string, locale) {
    if (locale === 'american-to-british') return string.replace(':', '.')
    if (locale === 'british-to-american') return string.replace('.', ':')
  }

  wrapInSpan(string) {
    return `<span class="highlight">${string}</span>`
  }
}

module.exports = Translator
