import Item from '../Item'

export default class SafeHome extends Item {
  static KEY = 'safehome'

  static parse(tokens: string[]) {
    const [ index, enabled, lat, lon ] = tokens
    return new SafeHome(index, enabled, lat, lon)
  }

  public index: string
  public enabled: string
  public lat: string
  public lon: string

  constructor(index: string, enabled: string, lat: string, lon: string) {
    super()
    this.index = index
    this.enabled = enabled
    this.lat = lat
    this.lon = lon
  }
}
