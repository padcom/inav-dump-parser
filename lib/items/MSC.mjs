import Item from '../Item.mjs'

export default class MSC extends Item {
  static KEY = 'msc'

  static parse(tokens) {
    return new MSC()
  }
}
