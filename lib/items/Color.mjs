import Item from '../Item.mjs'

export default class Color extends Item {
  static KEY = 'color'

  static parse(tokens) {
    return new Color()
  }
}
