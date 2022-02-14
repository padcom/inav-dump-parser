import Item from '../Item.mjs'

export default class Beeper extends Item {
  static KEY = 'beeper'

  static parse(tokens) {
    const [ condition ] = tokens
    return new Beeper(condition)
  }

  constructor(condition) {
    super()
    this.condition = condition
  }

  get enabled() {
    return !!this.condition?.startsWith('-')
  }
}
