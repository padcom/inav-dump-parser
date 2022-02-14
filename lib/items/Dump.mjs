import Item from '../Item.mjs'

export default class Dump extends Item {
  static KEY = 'dump'

  static parse(tokens) {
    return new Dump()
  }
}
