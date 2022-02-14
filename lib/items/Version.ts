import Item from '../Item'

export default class Version extends Item {
  static KEY = 'version'

  static parse(tokens: string[]) {
    return new Version()
  }
}
