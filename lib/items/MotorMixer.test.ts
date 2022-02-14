import MotorMixer from './MotorMixer'

describe('MotorMixer', () => {
  const cases = [
    { input: 'mmix 1  1.000 -2.000  3.000 -4.000', output: { index: '1', mixes: [ '1.000', '-2.000', '3.000', '-4.000' ] } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = MotorMixer.parse(entry.input.split(' ').slice(1))

      expect(result).toBeInstanceOf(MotorMixer)
      if (result instanceof MotorMixer) {
        expect(result.index).toBe(entry.output.index)
        expect(result.mixes).toStrictEqual(entry.output.mixes)
      }
    })
  })
})
