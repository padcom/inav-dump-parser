import Item from '../Item'

export default class Beeper extends Item {
  static KEY = 'beeper'

  static parse(tokens: string[]) {
    const [ condition ] = tokens
    return new Beeper(condition)
  }

  public condition: string

  constructor(condition: string) {
    super()
    this.condition = condition
  }

  get enabled() {
    return !this.condition?.startsWith('-')
  }
}
