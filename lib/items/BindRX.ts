import Item from '../Item'

export default class BindRX extends Item {
  static KEY = 'bind_rx'

  static parse(tokens: string[]) {
    return new BindRX()
  }
}
