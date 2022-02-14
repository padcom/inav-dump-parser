import Motor from './Motor'

describe('Motor', () => {
  const cases = [
    { input: 'motor 1', output: { index: '1', value: '' } },
    { input: 'motor 2 1100', output: { index: '2', value: '1100' } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = Motor.parse(entry.input.split(' ').slice(1))

      expect(result.index).toBe(entry.output.index)
      expect(result.value).toBe(entry.output.value)
    })
  })
})
