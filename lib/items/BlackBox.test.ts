import BlackBox from './BlackBox'

describe('BlackBox', () => {
  const cases = [
    { input: 'blackbox TEST', output: { setting: 'TEST', enabled: true } },
    { input: 'blackbox +TEST', output: { setting: '+TEST', enabled: true } },
    { input: 'blackbox -TEST', output: { setting: '-TEST', enabled: false } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = BlackBox.parse(entry.input.split(' ').slice(1))

      expect(result.setting).toBe(entry.output.setting)
      expect(result.enabled).toEqual(entry.output.enabled)
    })
  })
})
