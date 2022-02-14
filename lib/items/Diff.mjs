import Item from '../Item.mjs'

export default class Diff extends Item {
  static KEY = 'diff'

  static parse(tokens) {
    return new Diff()
  }
}
