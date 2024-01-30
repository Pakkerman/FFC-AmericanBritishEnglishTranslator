const chai = require('chai')
const assert = chai.assert

const Translator = require('../components/translator.js')
const t = new Translator()

suite('Unit Tests', () => {
  suite('American to British', () => {
    const locale = 'american-to-british'
    test('Mangoes are my favorite fruit.', (done) => {
      const input = 'Mangoes are my favorite fruit.'
      const result = t.translate(input, locale)
      const expected = `Mangoes are my ${t.wrapInSpan('favourite')} fruit.`
      assert.deepEqual(result, expected)
      done()
    })
    test('I ate yogurt for breakfast.', (done) => {
      const input = 'I ate yogurt for breakfast.'
      const result = t.translate(input, locale)
      const expected = `I ate ${t.wrapInSpan('yoghurt')} for breakfast.`
      assert.deepEqual(result, expected)
      done()
    })
    test("We had a party at my friend's condo.", (done) => {
      const input = "We had a party at my friend's condo."
      const result = t.translate(input, locale)
      const expected = `We had a party at my friend's ${t.wrapInSpan('flat')}.`
      assert.deepEqual(result, expected)
      done()
    })
    test('Can you toss this in the trashcan for me?', (done) => {
      const input = 'Can you toss this in the trashcan for me?'
      const result = t.translate(input, locale)
      const expected = `Can you toss this in the ${t.wrapInSpan('bin')} for me?`
      assert.deepEqual(result, expected)
      done()
    })
    test('The parking lot was full.', (done) => {
      const input = 'The parking lot was full.'
      const result = t.translate(input, locale)
      const expected = `The ${t.wrapInSpan('car park')} was full.`
      assert.deepEqual(result, expected)
      done()
    })
    test('Like a high tech Rube Goldberg machine.', (done) => {
      const input = 'Like a high tech Rube Goldberg machine.'
      const result = t.translate(input, locale)
      const expected = `Like a high tech ${t.wrapInSpan(
        'Heath Robinson device'
      )}.`
      assert.deepEqual(result, expected)
      done()
    })
    test('To play hooky means to skip class or work.', (done) => {
      const input = 'To play hooky means to skip class or work.'
      const result = t.translate(input, locale)
      const expected = `To ${t.wrapInSpan(
        'bunk off'
      )} means to skip class or work.`
      assert.deepEqual(result, expected)
      done()
    })
    test('No Mr. Bond, I expect you to die.', (done) => {
      const input = 'No Mr. Bond, I expect you to die.'
      const result = t.translate(input, locale)
      const expected = `No ${t.wrapInSpan('Mr')} Bond, I expect you to die.`
      assert.deepEqual(result, expected)
      done()
    })
    test('Dr. Grosh will see you now.', (done) => {
      const input = 'Dr. Grosh will see you now.'
      const result = t.translate(input, locale)
      const expected = `${t.wrapInSpan('Dr')} Grosh will see you now.`
      assert.deepEqual(result, expected)
      done()
    })
    test('Lunch is at 12:15 today.', (done) => {
      const input = 'Lunch is at 12:15 today.'
      const result = t.translate(input, locale)
      const expected = `Lunch is at ${t.wrapInSpan('12.15')} today.`
      assert.deepEqual(result, expected)
      done()
    })
    test('We watched the footie match for a while.', (done) => {
      const input = 'We watched the footie match for a while.'
      const result = t.translate(input, locale)
      const expected = `Everything looks good to me!`
      assert.deepEqual(result, expected)
      done()
    })
  })

  suite('British to American', () => {
    const locale = 'british-to-american'
    test('Paracetamol takes up to an hour to work.', (done) => {
      const input = 'Paracetamol takes up to an hour to work.'
      const result = t.translate(input, locale)
      const expected = `${t.wrapInSpan('Tylenol')} takes up to an hour to work.`
      assert.deepEqual(result, expected)
      done()
    })
    test('First, caramelise the onions.', (done) => {
      const input = 'First, caramelise the onions.'
      const result = t.translate(input, locale)
      const expected = `First, ${t.wrapInSpan('caramelize')} the onions.`
      assert.deepEqual(result, expected)
      done()
    })
    test('I spent the bank holiday at the funfair.', (done) => {
      const input = 'I spent the bank holiday at the funfair.'
      const result = t.translate(input, locale)
      const expected = `I spent the ${t.wrapInSpan(
        'public holiday'
      )} at the ${t.wrapInSpan('carnival')}.`
      assert.deepEqual(result, expected)
      done()
    })
    test('I had a bicky then went to the chippy.', (done) => {
      const input = 'I had a bicky then went to the chippy.'
      const result = t.translate(input, locale)
      const expected = `I had a ${t.wrapInSpan(
        'cookie'
      )} then went to the ${t.wrapInSpan('fish-and-chip shop')}.`
      assert.deepEqual(result, expected)
      done()
    })
    test("I've just got bits and bobs in my bum bag.", (done) => {
      const input = "I've just got bits and bobs in my bum bag."
      const result = t.translate(input, locale)
      const expected = `I've just got ${t.wrapInSpan(
        'odds and ends'
      )} in my ${t.wrapInSpan('fanny pack')}.`
      assert.deepEqual(result, expected)
      done()
    })
    test('The car boot sale at Boxted Airfield was called off.', (done) => {
      const input = 'The car boot sale at Boxted Airfield was called off.'
      const result = t.translate(input, locale)
      const expected = `The ${t.wrapInSpan(
        'swap meet'
      )} at Boxted Airfield was called off.`
      assert.deepEqual(result, expected)
      done()
    })
    test('Have you met Mrs Kalyani?', (done) => {
      const input = 'Have you met Mrs Kalyani?'
      const result = t.translate(input, locale)
      const expected = `Have you met ${t.wrapInSpan('Mrs.')} Kalyani?`
      assert.deepEqual(result, expected)
      done()
    })
    test("Prof Joyner of King's College, London.", (done) => {
      const input = "Prof Joyner of King's College, London."
      const result = t.translate(input, locale)
      const expected = `${t.wrapInSpan(
        'Prof.'
      )} Joyner of King's College, London.`
      assert.deepEqual(result, expected)
      done()
    })
    test('Tea time is usually around 4 or 4.30.', (done) => {
      const input = 'Tea time is usually around 4 or 4:30.'
      const result = t.translate(input, locale)
      const expected = `Tea time is usually around 4 or ${t.wrapInSpan(
        '4:30'
      )}.`
      assert.deepEqual(result, expected)
      done()
    })
  })

  suite('Highlight Translation', () => {
    const locale = 'american-to-british'
    test('Mangoes are my favorite fruit.', (done) => {
      const input = 'Mangoes are my favorite fruit.'
      const result = t.translate(input, locale)
      const expected = `Mangoes are my ${t.wrapInSpan('favourite')} fruit.`
      assert.deepEqual(result, expected)
      done()
    })
    test('I ate yogurt for breakfast.', (done) => {
      const input = 'I ate yogurt for breakfast.'
      const result = t.translate(input, locale)
      const expected = `I ate ${t.wrapInSpan('yoghurt')} for breakfast.`
      assert.deepEqual(result, expected)
      done()
    })
    test('We watched the footie match for a while.', (done) => {
      const input = 'We watched the footie match for a while.'
      const result = t.translate(input, locale)
      const expected = `Everything looks good to me!`
      assert.deepEqual(result, expected)
      done()
    })
    test('Paracetamol takes up to an hour to work.', (done) => {
      const input = 'Paracetamol takes up to an hour to work.'
      const result = t.translate(input, locale)
      const expected = `Everything looks good to me!`
      assert.deepEqual(result, expected)
      done()
    })
  })
})
