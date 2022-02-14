import Item from '../Item'

export default class ChannelMapping extends Item {
  static KEY = 'map'

  static parse(tokens: string[]) {
    const [ mapping ] = tokens
    return new ChannelMapping(mapping)
  }

  public mapping: string

  constructor(mapping: string) {
    super()
    this.mapping = mapping
  }
}
