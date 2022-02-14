import Item from '../Item.mjs'

export default class PlaySound extends Item {
  static KEY = 'play_sound'

  static parse(tokens) {
    return new PlaySound()
  }
}
