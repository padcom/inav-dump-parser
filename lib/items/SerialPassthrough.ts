import Item from '../Item'

export default class SerialPassthrough extends Item {
  static KEY = 'serialpassthrough'

  static parse(tokens: string[]) {
    const [ id, baud, mode ] = tokens
    return new SerialPassthrough(id, baud, mode)
  }

  public id: string
  public baud: string
  public mode: string

  constructor(id: string, baud: string = '', mode: string = '') {
    super()
    this.id = id
    this.baud = baud
    this.mode = mode
  }
}
