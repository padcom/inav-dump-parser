import Item from '../Item'

export default class RxRange extends Item {
  static KEY = 'rxrange'

  static parse(tokens: string[]) {
    const [ index, min, max ] = tokens
    return new RxRange(index, min, max)
  }

  public index: string
  public min: string
  public max: string

  constructor(index: string, min: string, max: string) {
    super()
    this.index = index
    this.min = min
    this.max = max
  }
}
