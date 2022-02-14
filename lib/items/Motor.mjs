import Item from '../Item.mjs'

export default class Motor extends Item {
  static KEY = 'motor'

  static parse(tokens) {
    return new Motor()
  }
}
