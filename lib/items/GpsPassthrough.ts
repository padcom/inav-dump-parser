import Item from '../Item'

export default class GpsPassthrough extends Item {
  static KEY = 'gpspassthrough'

  static parse(tokens: string[]) {
    return new GpsPassthrough()
  }
}
