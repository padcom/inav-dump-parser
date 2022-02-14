import Item from '../Item.mjs'

export default class BindRX extends Item {
  static KEY = 'bind_rx'

  static parse(tokens) {
    return new BindRX()
  }
}
