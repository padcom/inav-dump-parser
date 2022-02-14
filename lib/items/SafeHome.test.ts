import SafeHome from './SafeHome'

describe('SafeHome', () => {
  const cases = [
    { input: 'safehome 1 2 3 4', output: { index: '1', enabled: '2', lat: '3', lon: '4' } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = SafeHome.parse(entry.input.split(' ').slice(1))

      expect(result.index).toBe(entry.output.index)
      expect(result.enabled).toBe(entry.output.enabled)
      expect(result.lat).toBe(entry.output.lat)
      expect(result.lon).toBe(entry.output.lon)
    })
  })
})


