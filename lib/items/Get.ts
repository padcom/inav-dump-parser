import Item from '../Item'

export default class Get extends Item {
  static KEY = 'get'

  static parse(tokens: string[]) {
    const [ name ] = tokens
    return new Get(name)
  }

  public name: string

  constructor(name: string) {
    super()
    this.name = name
  }
}
