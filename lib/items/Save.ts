import Item from '../Item'

export default class Save extends Item {
  static KEY = 'save'

  static parse(tokens: string[]) {
    return new Save()
  }
}
