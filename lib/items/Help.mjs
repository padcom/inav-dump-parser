import Item from '../Item.mjs'

export default class Help extends Item {
  static KEY = 'help'

  static parse(tokens) {
    return new Help()
  }
}
