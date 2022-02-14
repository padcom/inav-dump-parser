import Item from '../Item.mjs'

export default class BatteryProfile extends Item {
  static KEY = 'battery_profile'

  static parse(tokens) {
    const [ index ] = tokens
    return new BatteryProfile(index)
  }

  constructor(index) {
    super()
    this.index = index
  }
}
