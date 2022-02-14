import Item from '../Item'

export default class Waypoint extends Item {
  static KEY = 'wp'

  static parse(tokens: string[]) {
    const [ index, action, lat, lon, alt, p1, p2, p3, flag ] = tokens
    return new Waypoint(index, action, lat, lon, alt, p1, p2, p3, flag)
  }

  public index: string
  public action: string
  public lat: string
  public lon: string
  public alt: string
  public p1: string
  public p2: string
  public p3: string
  public flag: string

  constructor(index: string, action: string, lat: string, lon: string, alt: string, p1: string, p2: string, p3: string, flag: string) {
    super()
    this.index = index
    this.action = action
    this.lat = lat
    this.lon = lon
    this.alt = alt
    this.p1 = p1
    this.p2 = p2
    this.p3 = p3
    this.flag = flag
  }
}
