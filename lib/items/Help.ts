import Item from '../Item'

export default class Help extends Item {
  static KEY = 'help'

  static parse(tokens: string[]) {
    return new Help()
  }
}
