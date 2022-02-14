import Version from './Version'

describe('Status', () => {
  it(`parse"`, () => {
    const input = 'version'

    const result = Version.parse(input.split(' ').slice(1))

    expect(result).toBeDefined()
  })
})
