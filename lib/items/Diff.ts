import Item from '../Item'

export default class Diff extends Item {
  static KEY = 'diff'

  static parse(tokens: string[]) {
    const [ target ] = tokens
    return new Diff(target)
  }

  public target: string

  constructor(target: string) {
    super()
    this.target = target
  }
}
