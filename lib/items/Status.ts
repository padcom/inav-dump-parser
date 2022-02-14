import Item from '../Item'

export default class Status extends Item {
  static KEY = 'status'

  static parse(tokens: string[]) {
    return new Status()
  }
}
