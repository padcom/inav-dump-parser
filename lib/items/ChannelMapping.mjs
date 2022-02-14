import Item from '../Item.mjs'

export default class ChannelMapping extends Item {
  static KEY = 'map'

  static parse(tokens) {
    return new ChannelMapping()
  }

  constructor(mapping) {
    super()
    this.mapping = mapping
  }
}
