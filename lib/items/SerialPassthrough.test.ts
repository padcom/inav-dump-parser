import SerialPassthrough from './SerialPassthrough'

describe('SerialPassthrough', () => {
  const cases = [
    { input: 'serialpassthrough 1 2 3', output: { id: '1', baud: '2', mode: '3' } },
    { input: 'serialpassthrough 1', output: { id: '1', baud: '', mode: '' } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = SerialPassthrough.parse(entry.input.split(' ').slice(1))

      expect(result.id).toBe(entry.output.id)
      expect(result.baud).toBe(entry.output.baud)
      expect(result.mode).toBe(entry.output.mode)
    })
  })
})


