import validator from '@/utils/validator'

describe('validator.js', () => {

  const rule = {
    field: 'test'
  }
  const cb = (error = null) => {
    if (error !== null) {
      throw error
    }
  }

  describe('validateEmpty()', () => {

    const errorMessage = `Please input the ${rule.field}`

    // ブランク時にエラーとなること
    it('Error when blanking', () => {
      try {
        validator.validateEmpty(rule, '', cb)
      } catch (e) {
        expect(e.message).toBe(errorMessage)
      }
    })

    // 文字が入力されている場合にエラーとならないこと
    it('Is no error when characters are inputted', () => {
      validator.validateEmpty(rule, 'test', cb)
      expect(true).toBeTruthy()
    })

  })

  describe('validateProhibitedChar()', () => {

    const errorMessage = `Invalid character in ${rule.field}. ".$#[]/"`
    const prohibitedChars = '.$#[]/'

    // 入力文字に禁止文字が含まれている場合にエラーとなること
    it('An error occurs if the input character contains prohibited characters', () => {
      for (let char of Array.from(prohibitedChars)) {
        try {
          validator.validateProhibitedChar(rule, `test${char}test`, cb)
        } catch (e) {
          expect(e.message).toBe(errorMessage)
        }
      }
    })

    // 禁止文字がない場合にエラーとならないこと
    it('There should be no error if there is no prohibited character', () => {
      validator.validateProhibitedChar(rule, 'test', cb)
      expect(true).toBeTruthy()
    })
  })
})