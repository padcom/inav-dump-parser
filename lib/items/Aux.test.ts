import Aux from './Aux'

describe('Aux', () => {
  it('parse', () => {
    const input = 'aux 1 2 3 4 5'

    const result = Aux.parse(input.split(' ').slice(1))

    expect(result.index).toBe('1')
    expect(result.permanentId).toBe('2')
    expect(result.auxChannelIndex).toBe('3')
    expect(result.startStep).toBe('4')
    expect(result.endStep).toBe('5')
  })
})
