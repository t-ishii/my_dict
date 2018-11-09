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
})