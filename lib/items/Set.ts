import Item from '../Item'

export default class Set extends Item {
  static KEY = 'set'

  static parse(tokens: string[]) {
    const [ name, , value ] = tokens
    return new Set(name, value)
  }

  public name: string
  public value: string

  constructor(name: string, value: string) {
    super()
    this.name  = name
    this.value = value
  }
}
