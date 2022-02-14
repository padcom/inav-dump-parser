import Dump from './Dump'

describe('Dump', () => {
  const cases = [
    { input: 'dump', output: { target: undefined } },
    { input: 'dump all', output: { target: 'all' } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = Dump.parse(entry.input.split(' ').slice(1))
      expect(result.target).toBe(entry.output.target)
    })
  })
})
