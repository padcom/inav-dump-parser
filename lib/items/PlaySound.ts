import Item from '../Item'

export default class PlaySound extends Item {
  static KEY = 'play_sound'

  static parse(tokens: string[]) {
    const [ index ] = tokens
    return new PlaySound(index)
  }

  public index: string

  constructor(index: string) {
    super()
    this.index = index
  }
}
