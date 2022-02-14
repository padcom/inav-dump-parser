import Item from '../Item'

export default class BatteryProfile extends Item {
  static KEY = 'battery_profile'

  static parse(tokens: string[]) {
    const [ index ] = tokens
    return new BatteryProfile(index)
  }

  public index: string

  constructor(index: string) {
    super()
    this.index = index
  }
}

