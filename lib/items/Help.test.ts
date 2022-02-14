import Help from './Help'

describe('Help', () => {
  it(`parse"`, () => {
    const input = 'help'

    const result = Help.parse(input.split(' ').slice(1))

    expect(result).toBeDefined()
  })
})
