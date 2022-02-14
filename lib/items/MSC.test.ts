import MSC from './MSC'

describe('MSC', () => {
  it(`parse"`, () => {
    const input = 'msc'

    const result = MSC.parse(input.split(' ').slice(1))

    expect(result).toBeDefined()
  })
})
