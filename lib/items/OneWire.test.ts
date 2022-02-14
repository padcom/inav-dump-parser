import OneWire from './OneWire'

describe('OneWire', () => {
  it(`parse"`, () => {
    const input = '1wire'

    const result = OneWire.parse(input.split(' ').slice(1))

    expect(result).toBeDefined()
  })
})
