import Beeper from './Beeper'

describe('Beeper', () => {
  const cases = [
    { input: 'beeper TEST', output: { condition: 'TEST', enabled: true } },
    { input: 'beeper +TEST', output: { condition: '+TEST', enabled: true } },
    { input: 'beeper -TEST', output: { condition: '-TEST', enabled: false } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = Beeper.parse(entry.input.split(' ').slice(1))

      expect(result.condition).toBe(entry.output.condition)
      expect(result.enabled).toEqual(entry.output.enabled)
    })
  })
})
