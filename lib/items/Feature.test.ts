import Feature from './Feature'

describe('Feature', () => {
  const cases = [
    { input: 'feature TEST', output: { feature: 'TEST', enabled: true } },
    { input: 'feature +TEST', output: { feature: '+TEST', enabled: true } },
    { input: 'feature -TEST', output: { feature: '-TEST', enabled: false } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = Feature.parse(entry.input.split(' ').slice(1))

      expect(result.feature).toBe(entry.output.feature)
      expect(result.enabled).toEqual(entry.output.enabled)
    })
  })
})
