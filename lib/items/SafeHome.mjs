import Item from '../Item.mjs'

export default class SafeHome extends Item {
  static KEY = 'safehome'

  static parse(tokens) {
    return new SafeHome()
  }
}
