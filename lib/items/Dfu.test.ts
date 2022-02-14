import Dfu from './Dfu'

describe('Dfu', () => {
  it(`parse`, () => {
    const input = 'dfu'
    const result = Dfu.parse(input.split(' ').slice(1))
    expect(result).toBeInstanceOf(Dfu)
  })
})
