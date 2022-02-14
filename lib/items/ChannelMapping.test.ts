import ChannelMapping from './ChannelMapping'

describe('ChannelMapping', () => {
  const cases = [
    { input: 'map TAER', output: { mapping: 'TAER' } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = ChannelMapping.parse(entry.input.split(' ').slice(1))

      expect(result.mapping).toBe(entry.output.mapping)
    })
  })
})
