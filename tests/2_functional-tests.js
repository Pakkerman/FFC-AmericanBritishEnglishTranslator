const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = chai.assert
const server = require('../server.js')

chai.use(chaiHttp)

let Translator = require('../components/translator.js')

suite('Functional Tests', () => {
  suite('POST /api/translate', () => {
    test('with valid fields', (done) => {
      //  with text and locale fields: POST request to /api/translate
      const input = {
        text: 'Mangos are my favorite fruit.',
        locale: 'american-to-british',
      }
      const expected = {
        text: 'Mangos are my favorite fruit.',
        translation:
          'Mangos are my <span class="highlight">favourite</span> fruit.',
      }

      chai
        .request(server)
        .post('/api/translate')
        .send(input)
        .end((err, res) => {
          assert.equal(res.status, 200)
          assert.deepEqual(res.body, expected)
          done()
        })
    })
    test('with invalid locale', (done) => {
      //  with text and invalid locale field: POST request to /api/translate
      const input = {
        text: 'Mangos are my favorite fruit.',
        locale: 'american-to-french',
      }
      const expected = { error: 'Invalid value for locale field' }
      chai
        .request(server)
        .post('/api/translate')
        .send(input)
        .end((err, res) => {
          assert.equal(res.status, 200)
          assert.deepEqual(res.body, expected)
          done()
        })
    })
    test('with missing text', (done) => {
      //  with missing text field: POST request to /api/translate
      const input = {
        locale: 'american-to-french',
      }
      const expected = { error: 'Required field(s) missing' }
      chai
        .request(server)
        .post('/api/translate')
        .send(input)
        .end((err, res) => {
          assert.equal(res.status, 200)
          assert.deepEqual(res.body, expected)
          done()
        })
    })
    test('with missing locale', (done) => {
      //  with missing locale field: POST request to /api/translate
      const input = {
        text: 'Mangos are my favorite fruit.',
      }
      const expected = { error: 'Required field(s) missing' }
      chai
        .request(server)
        .post('/api/translate')
        .send(input)
        .end((err, res) => {
          assert.equal(res.status, 200)
          assert.deepEqual(res.body, expected)
          done()
        })
    })
    test('with empty text', (done) => {
      //  with empty text: POST request to /api/translate

      const input = {
        text: '',
        locale: 'american-to-british',
      }
      const expected = { error: 'No text to translate' }
      chai
        .request(server)
        .post('/api/translate')
        .send(input)
        .end((err, res) => {
          assert.equal(res.status, 200)
          assert.deepEqual(res.body, expected)
          done()
        })
    })
    test("with text that doesn't translation", (done) => {
      //  with text that needs no translation: POST request to /api/translate
      const input = {
        text: 'Mangos are my favorite fruit.',
        locale: 'british-to-american',
      }
      const expected = {
        text: 'Mangos are my favorite fruit.',
        translation: 'Everything looks good to me!',
      }
      chai
        .request(server)
        .post('/api/translate')
        .send(input)
        .end((err, res) => {
          assert.equal(res.status, 200)
          assert.deepEqual(res.body, expected)
          done()
        })
    })
  })
})
