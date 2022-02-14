import Item from '../Item'

export default class Color extends Item {
  static KEY = 'color'

  static parse(tokens: string[]) {
    const [ index, rgb ] = tokens
    const [ r, g, b ] = rgb.split(',').filter(s => s).map(s => s.trim())
    return new Color(index, r, g, b)
  }

  public index: string
  public r: string
  public g: string
  public b: string

  constructor(index: string, r: string, g: string, b: string) {
    super()
    this.index = index
    this.r = r
    this.g = g
    this.b = b
  }
}
