import Item from '../Item'

export default class OSD extends Item {
  static KEY = 'osd_layout'

  static parse(tokens: string[]) {
    const [ layout, item, x, y, visible ] = tokens
    return new OSD(layout, item, x, y, visible)
  }

  public layout: string
  public item: string
  public x: string
  public y: string
  public visible: string

  constructor(layout: string, item: string, x: string, y: string, visible: string) {
    super()
    this.layout = layout
    this.item = item
    this.x = x
    this.y = y
    this.visible = visible
  }
}
