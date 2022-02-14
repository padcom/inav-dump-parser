import Waypoint from './Waypoint'

describe('Waypoint', () => {
  const cases = [
    { input: 'wp 117 1 2 3 4 5 6 7 8', output: { index: '117', action: '1', lat: '2', lon: '3', alt: '4', p1: '5', p2: '6', p3: '7', flag: '8' } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = Waypoint.parse(entry.input.split(' ').slice(1))

      expect(result.index).toBe(entry.output.index)
      expect(result.action).toBe(entry.output.action)
      expect(result.lat).toBe(entry.output.lat)
      expect(result.lon).toBe(entry.output.lon)
      expect(result.alt).toBe(entry.output.alt)
      expect(result.p1).toBe(entry.output.p1)
      expect(result.p2).toBe(entry.output.p2)
      expect(result.p3).toBe(entry.output.p3)
      expect(result.flag).toBe(entry.output.flag)

    })
  })
})


