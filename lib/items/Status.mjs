import Item from '../Item.mjs'

export default class Status extends Item {
  static KEY = 'status'

  static parse(tokens) {
    return new Status()
  }
}
