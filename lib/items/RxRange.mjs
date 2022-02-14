import Item from '../Item.mjs'

export default class RxRange extends Item {
  static KEY = 'rxrange'

  static parse(tokens) {
    return new RxRange()
  }
}
