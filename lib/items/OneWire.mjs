import Item from '../Item.mjs'

export default class OneWire extends Item {
  static KEY = '1wire'

  static parse(tokens) {
    return new OneWire()
  }
}
