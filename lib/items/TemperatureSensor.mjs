import Item from '../Item.mjs'

export default class TemperatureSensor extends Item {
  static KEY = 'temp_sensor'

  static parse(tokens) {
    return new TemperatureSensor()
  }
}
