import Exit from './Exit'

describe('Exit', () => {
  it(`parse"`, () => {
    const input = 'exit'

    const result = Exit.parse(input.split(' ').slice(1))

    expect(result).toBeDefined()
  })
})
