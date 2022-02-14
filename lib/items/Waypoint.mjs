import Item from '../Item.mjs'

export default class Waypoint extends Item {
  static KEY = 'wp'

  static parse(tokens) {
    return new Waypoint()
  }
}
