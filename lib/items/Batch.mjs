import Item from '../Item.mjs'

export default class Batch extends Item {
  static KEY = 'batch'

  static parse(tokens) {
    const [ command ] = tokens
    return new Batch(command)
  }

  constructor(command) {
    super()
    this.command = command
  }
}
