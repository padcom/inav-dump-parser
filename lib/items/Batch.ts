import Item from '../Item'

export default class Batch extends Item {
  static KEY = 'batch'

  static parse(tokens: string[]) {
    const [ command ] = tokens
    return new Batch(command)
  }

  public command: string

  constructor(command: string) {
    super()
    this.command = command
  }
}
