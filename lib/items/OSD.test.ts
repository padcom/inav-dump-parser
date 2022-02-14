import OSD from './OSD'

describe('OSD', () => {
  const cases = [
    { input: 'osd_layout 3 89 19 5 H', output: { layout: '3', item: '89', x: '19', y: '5', visible: 'H' } },
    { input: 'osd_layout 3 89 19 5 V', output: { layout: '3', item: '89', x: '19', y: '5', visible: 'V' } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = OSD.parse(entry.input.split(' ').slice(1))

      expect(result.layout).toBe(entry.output.layout)
      expect(result.item).toBe(entry.output.item)
      expect(result.x).toBe(entry.output.x)
      expect(result.y).toBe(entry.output.y)
      expect(result.visible).toBe(entry.output.visible)
    })
  })
})


