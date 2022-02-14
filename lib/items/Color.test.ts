import Color from './Color'

describe('ChannelMapping', () => {
  const cases = [
    { input: 'color 1 0,255,255', output: { index: '1', r: '0', g: '255', b: '255' } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = Color.parse(entry.input.split(' ').slice(1))

      expect(result.index).toBe(entry.output.index)
      expect(result.r).toBe(entry.output.r)
      expect(result.g).toBe(entry.output.g)
      expect(result.b).toBe(entry.output.b)
    })
  })
})
