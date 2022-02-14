import Item from '../Item.mjs'

export default class Version extends Item {
  static KEY = 'version'

  static parse(tokens) {
    return new Version()
  }
}
