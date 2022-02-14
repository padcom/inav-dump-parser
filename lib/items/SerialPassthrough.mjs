import Item from '../Item.mjs'

export default class SerialPassthrough extends Item {
  static KEY = 'serialpassthrough'

  static parse(tokens) {
    const [ id, baud, mode ] = tokens
    return new SerialPassthrough(id, baud, mode)
  }

  constructor(id, baud, mode) {
    this.id = id
    this.baud = baud
    this.mode = mode
  }
}
