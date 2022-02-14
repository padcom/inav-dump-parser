import Item from '../Item.mjs'

export default class Defaults extends Item {
  static KEY = 'defaults'

  static parse(tokens) {
    return new Defaults()
  }
}
