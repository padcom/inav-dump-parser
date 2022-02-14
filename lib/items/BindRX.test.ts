import BindRX from './BindRX'

describe('BindRX', () => {
  it('parse', () => {
    const input = 'bind_rx'

    const result = BindRX.parse(input.split(' ').slice(1))

    expect(result).toBeDefined()
  })
})
