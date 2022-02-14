import Item from '../Item.mjs'

export class ServoMixerReset extends Item {
  static KEY = 'smix'
}

export default class ServoMixer extends Item {
  static KEY = 'smix'

  static parse(tokens) {
    if (tokens.length === 1) {
      return new ServoMixerReset()
    } else {
      const [ index, ...mixes ] = tokens
      return new ServoMixer(index, mixes)
    }
  }

  constructor(index, mixes) {
    super()
    this.index = index
    this.mixes = mixes
  }
}
