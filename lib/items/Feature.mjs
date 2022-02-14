import Item from '../Item.mjs'

export default class Feature extends Item {
  static KEY = 'feature'

  static parse(tokens) {
    const [ name ] = tokens
    return new Feature(name)
  }

  constructor(feature) {
    super()
    this.feature = feature
  }

  get enabled() {
    return this.feature.startsWith('-')
  }
}
