import Item from '../Item.mjs'

export default class Set extends Item {
  static KEY = 'set'

  static parse(tokens) {
    const [ name, value ] = tokens
    return new Set(name, value)
  }

  constructor(name, value) {
    super()
    this.name  = name
    this.value = value
  }
}
