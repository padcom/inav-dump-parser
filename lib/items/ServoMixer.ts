import Item from '../Item'

export class ServoMixerReset extends Item {
  static KEY = 'smix'
}

export default class ServoMixer extends Item {
  static KEY = 'smix'

  static parse(tokens: string[]) {
    if (tokens.length === 1) {
      return new ServoMixerReset()
    } else {
      const [ index, ...mixes ] = tokens
      return new ServoMixer(index, mixes)
    }
  }

  public index: string
  public mixes: string[]

  constructor(index: string, mixes: string[]) {
    super()
    this.index = index
    this.mixes = mixes
  }
}
