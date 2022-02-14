import Item from '../Item'

export default class Aux extends Item {
  static KEY = 'aux'

  static parse(tokens: string[]) {
    const [ index, permanentId, auxChannelIndex, startStep, endStep ] = tokens
    return new Aux(index, permanentId, auxChannelIndex, startStep, endStep)
  }

  public index: string
  public permanentId: string
  public auxChannelIndex: string
  public startStep: string
  public endStep: string

  constructor(index: string, permanentId: string, auxChannelIndex: string, startStep: string, endStep: string) {
    super()
    this.index = index
    this.permanentId = permanentId
    this.auxChannelIndex = auxChannelIndex
    this.startStep = startStep
    this.endStep = endStep
  }
}
