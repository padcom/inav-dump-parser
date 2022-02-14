import Item from '../Item'

export default class Exit extends Item {
  static KEY = 'exit'

  static parse(tokens: string[]) {
    return new Exit()
  }
}
