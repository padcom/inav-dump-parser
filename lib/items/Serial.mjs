import Item from '../Item.mjs'

export default class Serial extends Item {
  static KEY = 'serial'

  static parse(tokens) {
    return new Serial()
  }
}
