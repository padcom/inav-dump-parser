import Item from '../Item'

export default class Defaults extends Item {
  static KEY = 'defaults'

  static parse(tokens: string[]) {
    return new Defaults()
  }
}
