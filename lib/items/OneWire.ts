import Item from '../Item'

export default class OneWire extends Item {
  static KEY = '1wire'

  static parse(tokens: string[]) {
    return new OneWire()
  }
}
