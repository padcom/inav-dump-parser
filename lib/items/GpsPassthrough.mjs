import Item from '../Item.mjs'

export default class GpsPassthrough extends Item {
  static KEY = 'gpspassthrough'

  static parse(tokens) {
    return new GpsPassthrough()
  }
}
