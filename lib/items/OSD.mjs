import Item from '../Item.mjs'

export default class OSD extends Item {
  static KEY = 'osd_layout'

  static parse(tokens) {
    const [ layout, item, x, y, visible ] = tokens
    return new OSD(layout, item, x, y, visible)
  }

  constructor(layout, item, x, y, visible) {
    super()
    this.layout = layout
    this.item = item
    this.x = x
    this.y = y
    this.visible = visible
  }
}
