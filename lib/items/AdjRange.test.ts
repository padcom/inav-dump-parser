import AdjRange from './AdjRange'

describe('AdjRange', () => {
  it('parse', () => {
    const input = 'adjrange 1 2 3 4 5 6 7'

    const result = AdjRange.parse(input.split(' ').slice(1))

    expect(result.index).toBe('1')
    expect(result.adjustmentIndex).toBe('2')
    expect(result.channelIndex).toBe('3')
    expect(result.startStep).toBe('4')
    expect(result.endStep).toBe('5')
    expect(result.adjustmentFunction).toBe('6')
    expect(result.auxSwitchChannelIndex).toBe('7')
  })
})
