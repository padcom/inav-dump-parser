import Item from '../Item'

export default class Feature extends Item {
  static KEY = 'feature'

  static parse(tokens: string[]) {
    const [ name ] = tokens
    return new Feature(name)
  }

  public feature: string

  constructor(feature: string) {
    super()
    this.feature = feature
  }

  get enabled() {
    return !this.feature.startsWith('-')
  }
}
