import ServoMixer from './ServoMixer'

describe('ServoMixer', () => {
  const cases = [
    { input: 'smix 1 6 7 100 8 9', output: { index: '1', mixes: [ '6', '7', '100', '8', '9' ] } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = ServoMixer.parse(entry.input.split(' ').slice(1))

      expect(result).toBeInstanceOf(ServoMixer)
      if (result instanceof ServoMixer) {
        expect(result.index).toBe(entry.output.index)
        expect(result.mixes).toStrictEqual(entry.output.mixes)
      }
    })
  })
})
