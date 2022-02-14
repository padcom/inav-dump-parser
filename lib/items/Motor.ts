import Item from '../Item'

export default class Motor extends Item {
  static KEY = 'motor'

  static parse(tokens: string[]) {
    const [ index, value ] = tokens
    return new Motor(index, value)
  }

  public index: string
  public value: string

  constructor(index: string, value: string = '') {
    super()
    this.index = index
    this.value = value
  }
}
