import Item from '../Item'

export default class Profile extends Item {
  static KEY = 'profile'

  static parse(tokens: string[]) {
    const [ index ] = tokens
    return new Profile(index)
  }

  public index: string

  constructor(index: string) {
    super()
    this.index = index
  }
}
