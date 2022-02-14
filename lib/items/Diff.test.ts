import Diff from './Diff'

describe('Diff', () => {
  const cases = [
    { input: 'diff', output: { target: undefined } },
    { input: 'diff all', output: { target: 'all' } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = Diff.parse(entry.input.split(' ').slice(1))
      expect(result.target).toBe(entry.output.target)
    })
  })
})
