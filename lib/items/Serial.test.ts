import Serial from './Serial'

describe('SafeHome', () => {
  const cases = [
    { input: 'serial 20 1 115200 115200 0 115200', output: { identifier: '20', functionMask: '1', mspBaudrate: '115200', gpsBaudrate: '115200', telemetryBaudrate: '0', peripherialBaudrate: '115200' } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = Serial.parse(entry.input.split(' ').slice(1))

      expect(result.identifier).toBe(entry.output.identifier)
      expect(result.functionMask).toBe(entry.output.functionMask)
      expect(result.mspBaudrate).toBe(entry.output.mspBaudrate)
      expect(result.gpsBaudrate).toBe(entry.output.gpsBaudrate)
      expect(result.telemetryBaudrate).toBe(entry.output.telemetryBaudrate)
      expect(result.peripherialBaudrate).toBe(entry.output.peripherialBaudrate)
    })
  })
})


