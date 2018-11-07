import tools from '@/utils/tools'

describe('tools.js', () => {
  describe('getLocationHash()', () => {

    beforeEach(() => {
      location.hash = ''
    })

    // ハッシュ値が存在する場合にhash値が取得できているか
    it('Whether a hash value can be obtained when a hash value exists', () => {
      location.hash = 'hash'
      expect(tools.getLocationHash()).toBe('hash')
    })

    // ハッシュ値が未設定の場合に空文字が返却されること
    it('Empty character is returned when the hash value is not set.', () => {
      expect(tools.getLocationHash()).toBe('')
    })

    // ハッシュ値にクエリがついていても正常に取得できること
    it('Whether hash value + It is possible to obtain a hash value correctly in query', () => {
      location.hash = 'hash?test=aaaa'
      expect(tools.getLocationHash()).toBe('hash')
    })

  })
})