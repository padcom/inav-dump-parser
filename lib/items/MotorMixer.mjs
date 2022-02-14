import Item from '../Item.mjs'

export class MotorMixerReset extends Item {
  static KEY = 'mmix'
}

export default class MotorMixer extends Item {
  static KEY = 'mmix'

  static parse(tokens) {
    if (tokens.length === 1) {
      return new MotorMixerReset()
    } else {
      const [ index, ...mixes ] = tokens
      return new MotorMixer(index, mixes)
    }
  }

  constructor(index, mixes) {
    super()
    this.index = index
    this.mixes = mixes
  }
}
