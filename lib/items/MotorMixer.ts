import Item from '../Item'

export class MotorMixerReset extends Item {
  static KEY = 'mmix'
}

export default class MotorMixer extends Item {
  static KEY = 'mmix'

  static parse(tokens: string[]) {
    if (tokens.length === 1) {
      return new MotorMixerReset()
    } else {
      const [ index, ...mixes ] = tokens
      return new MotorMixer(index, mixes.filter(s => s))
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
