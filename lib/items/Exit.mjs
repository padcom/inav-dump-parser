import Item from '../Item.mjs'

export default class Exit extends Item {
  static KEY = 'exit'

  static parse(tokens) {
    return new Exit()
  }
}
