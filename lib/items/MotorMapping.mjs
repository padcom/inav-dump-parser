import Item from '../Item.mjs'

export default class MotorMapping extends Item {
  static KEY = 'map'

  static parse(tokens) {
    return new MotorMapping()
  }
}
