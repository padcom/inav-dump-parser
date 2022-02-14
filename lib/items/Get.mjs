import Item from '../Item.mjs'

export default class Get extends Item {
  static KEY = 'get'

  static parse(tokens) {
    const [ name ] = tokens
    return new Get(name)
  }
}
