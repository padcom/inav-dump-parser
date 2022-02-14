import Defaults from './Defaults'

describe('Defaults', () => {
  it(`parse"`, () => {
    const input = 'defaults'

    const result = Defaults.parse(input.split(' ').slice(1))

    expect(result).toBeDefined()
  })
})
