import Item from '../Item'

export default class BlackBox extends Item {
  static KEY = 'blackbox'

  static parse(tokens: string[]) {
    return new BlackBox(tokens[0])
  }

  public setting: string

  constructor(setting: string) {
    super()
    this.setting = setting
  }

  get enabled() {
    return !this.setting?.startsWith('-')
  }
}
