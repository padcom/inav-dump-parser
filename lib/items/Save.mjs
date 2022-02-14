import Item from '../Item.mjs'

export default class Save extends Item {
  static KEY = 'save'

  static parse(tokens) {
    return new Save()
  }
}
