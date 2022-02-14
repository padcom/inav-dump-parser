import Profile from './Profile'

describe('Profile', () => {
  const cases = [
    { input: 'profile 1', output: { index: '1' } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = Profile.parse(entry.input.split(' ').slice(1))

      expect(result.index).toBe(entry.output.index)
    })
  })
})


