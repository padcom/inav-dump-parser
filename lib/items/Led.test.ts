import Led from './Led'

describe('Led', () => {
  const cases = [
    { input: 'led 0 0,0::C:0', output: { index: '0', x: '0', y: '0', directions: '', baseFunctionOverlays: 'C', color: '0' } },
    { input: 'led 1 2,3:4:5:6', output: { index: '1', x: '2', y: '3', directions: '4', baseFunctionOverlays: '5', color: '6' } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = Led.parse(entry.input.split(' ').slice(1))

      expect(result.index).toBe(entry.output.index)
      expect(result.x).toBe(entry.output.x)
      expect(result.y).toBe(entry.output.y)
      expect(result.directions).toBe(entry.output.directions)
      expect(result.baseFunctionOverlays).toBe(entry.output.baseFunctionOverlays)
      expect(result.color).toBe(entry.output.color)
    })
  })
})
