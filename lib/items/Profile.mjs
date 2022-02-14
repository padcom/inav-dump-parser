import Item from '../Item.mjs'

export default class Profile extends Item {
  static KEY = 'profile'

  static parse(tokens) {
    const [ index ] = tokens
    return new Profile(index)
  }

  constructor(index) {
    super()
    this.index = index
  }
}
