import Item from '../Item.mjs'

export default class Led extends Item {
  static KEY = 'led'

  static parse(tokens) {
    return new Led()
  }
}
