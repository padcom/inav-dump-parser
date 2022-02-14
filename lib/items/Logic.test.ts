import Logic from './Logic'

describe('Logic', () => {
  const cases = [
    { input: 'logic 0 1 -1 18 0 0 2 12 0', output: { index: '0', enabled: '1', activatorId: '-1', operation: '18', operandAType: '0', oprandAValue: '0', operandBType: '2', oprandBValue: '12', flags: '0' } },
  ]

  cases.forEach(entry => {
    it(`parse "${entry.input}"`, () => {
      const result = Logic.parse(entry.input.split(' ').slice(1))

      expect(result.index).toBe(entry.output.index)
      expect(result.enabled).toBe(entry.output.enabled)
      expect(result.activatorId).toBe(entry.output.activatorId)
      expect(result.operation).toBe(entry.output.operation)
      expect(result.operandAType).toBe(entry.output.operandAType)
      expect(result.oprandAValue).toBe(entry.output.oprandAValue)
      expect(result.operandBType).toBe(entry.output.operandBType)
      expect(result.oprandBValue).toBe(entry.output.oprandBValue)
      expect(result.flags).toBe(entry.output.flags)
    })
  })
})
