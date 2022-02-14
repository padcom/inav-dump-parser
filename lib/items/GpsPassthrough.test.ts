import GpsPassthrough from './GpsPassthrough'

describe('Exit', () => {
  it(`parse"`, () => {
    const input = 'gpspassthrough'

    const result = GpsPassthrough.parse(input.split(' ').slice(1))

    expect(result).toBeDefined()
  })
})
