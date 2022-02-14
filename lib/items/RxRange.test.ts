import RxRange from './RxRange'

describe('RxRange', () => {
  const cases = [
    { input: 'rxrange 1 1000 2000', output: { index: '1', min: '1000', max: '2000' } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = RxRange.parse(entry.input.split(' ').slice(1))

      expect(result.index).toBe(entry.output.index)
      expect(result.min).toBe(entry.output.min)
      expect(result.max).toBe(entry.output.max)
    })
  })
})


