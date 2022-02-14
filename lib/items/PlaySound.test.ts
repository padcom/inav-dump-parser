import PlaySound from './PlaySound'

describe('PlaySound', () => {
  const cases = [
    { input: 'play_sound 1', output: { index: '1' } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = PlaySound.parse(entry.input.split(' ').slice(1))

      expect(result.index).toBe(entry.output.index)
    })
  })
})


