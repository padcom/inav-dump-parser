import Item from '../Item'

export default class Dump extends Item {
  static KEY = 'dump'

  static parse(tokens: string[]) {
    const [ target ] = tokens
    return new Dump(target)
  }

  public target: string

  constructor(target: string) {
    super()
    this.target = target
  }
}
