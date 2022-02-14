import Item from '../Item.mjs'

export default class Logic extends Item {
  static KEY = 'logic'

  static parse(tokens) {
    return new Logic()
  }
}
