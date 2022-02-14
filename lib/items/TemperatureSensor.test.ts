import TemperatureSensor from './TemperatureSensor'

describe('TemperatureSensor', () => {
  const cases = [
    { input: 'temp_sensor 1 2 3 4 5 6', output: { index: '1', type: '2', min: '4', max: '5' } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = TemperatureSensor.parse(entry.input.split(' ').slice(1))

      expect(result.index).toBe(entry.output.index)
    })
  })
})


