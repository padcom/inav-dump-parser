import Item from '../Item.mjs'

export default class AdjRange extends Item {
  static KEY = 'adjrange'

  static parse(tokens) {
    const [ index, channel, min, max, func, switchChannel ] = tokens
    return new AdjRange(index, channel, min, max, func, switchChannel)
  }

  constructor(index, channel, min, max, func, switchChannel) {
    this.index = index
    this.channel = channel
    this.min = min
    this.max = max
    this.func = func
    this.switchChannel = switchChannel
  }
}
