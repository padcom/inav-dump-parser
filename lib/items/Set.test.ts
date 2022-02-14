import Set from './Set'

describe('Set', () => {
  const cases = [
    { input: 'set x = 123', output: { name: 'x', value: '123' } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = Set.parse(entry.input.split(' ').slice(1))

      expect(result.name).toBe(entry.output.name)
      expect(result.value).toBe(entry.output.value)
    })
  })
})


