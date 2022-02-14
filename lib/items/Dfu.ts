import Item from '../Item'

export default class Dfu extends Item {
  static KEY = 'diff'

  static parse(tokens: string[]) {
    return new Dfu()
  }
}
