import Item from '../Item'

export default class Logic extends Item {
  static KEY = 'logic'

  static parse(tokens: string[]) {
    const [ index, enabled, activatorId, operation, operandAType, oprandAValue, operandBType, oprandBValue, flags ] = tokens
    return new Logic(index, enabled, activatorId, operation, operandAType, oprandAValue, operandBType, oprandBValue, flags)
  }

  public index: string
  public enabled: string
  public activatorId: string
  public operation: string
  public operandAType: string
  public oprandAValue: string
  public operandBType: string
  public oprandBValue: string
  public flags: string

  constructor(index: string, enabled: string, activatorId: string, operation: string, operandAType: string, oprandAValue: string, operandBType: string, oprandBValue: string, flags: string) {
    super()
    this.index = index
    this.enabled = enabled
    this.activatorId = activatorId
    this.operation = operation
    this.operandAType = operandAType
    this.oprandAValue = oprandAValue
    this.operandBType = operandBType
    this.oprandBValue = oprandBValue
    this.flags = flags
  }
}
