import BatteryProfile from './BatteryProfile'

describe('BatteryProfile', () => {
  it('parse', () => {
    const input = 'battery_profile 1'

    const result = BatteryProfile.parse(input.split(' ').slice(1))

    expect(result.index).toBe('1')
  })
})
