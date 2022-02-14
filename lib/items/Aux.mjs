import Item from '../Item.mjs'

export default class Aux extends Item {
  static KEY = 'aux'

  static parse(tokens) {
    const [ index, permanentId, auxChannelIndex, startStep, endStep ] = tokens
    return new Aux(index, permanentId, auxChannelIndex, startStep, endStep)
  }

  constructor(index, permanentId, auxChannelIndex, startStep, endStep) {
    this.index = index
    this.permanentId = permanentId
    this.auxChannelIndex = auxChannelIndex
    this.startStep = startStep
    this.endStep = endStep
  }
}
