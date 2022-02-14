import Item from '../Item'

export default class MSC extends Item {
  static KEY = 'msc'

  static parse(tokens: string[]) {
    return new MSC()
  }
}
