import Item from '../Item.mjs'

export default class BlackBox extends Item {
  static KEY = 'blackbox'

  static parse(tokens) {
    return new BlackBox(tokens[0])
  }

  constructor(setting) {
    super()
    this.setting = setting
  }

  get enabled() {
    return !!this.setting?.startsWith('-')
  }
}
