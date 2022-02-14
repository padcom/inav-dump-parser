import Item from '../Item'

export default class Led extends Item {
  static KEY = 'led'

  static parse(tokens: string[]) {
    const [ index, config ] = tokens
    const [ x, y, directions, baseFunctionOverlays, color ] = config.split(/[,:]/)
    return new Led(index, x, y, directions, baseFunctionOverlays, color)
  }

  public index: string
  public x: string
  public y: string
  public directions: string
  public baseFunctionOverlays: string
  public color: string

  constructor(index: string, x: string, y: string, directions: string, baseFunctionOverlays: string, color: string) {
    super()
    this.index = index
    this.x = x
    this.y = y
    this.directions = directions
    this.baseFunctionOverlays = baseFunctionOverlays
    this.color = color
  }
}
