import Item from '../Item'

export default class TemperatureSensor extends Item {
  static KEY = 'temp_sensor'

  static parse(tokens: string[]) {
    const [ index ] = tokens
    return new TemperatureSensor(index)
  }

  public index: string

  constructor(index: string) {
    super()
    this.index = index
  }
}
