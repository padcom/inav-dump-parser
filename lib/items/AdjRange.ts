import Item from '../Item'

export default class AdjRange extends Item {
  static KEY = 'adjrange'

  static parse(tokens: string[]) {
    const [ index, adjustment, channel, min, max, func, switchChannel ] = tokens
    return new AdjRange(index, adjustment, channel, min, max, func, switchChannel)
  }

  public index: string
  public channelIndex: string
  public adjustmentIndex: string
  public startStep: string
  public endStep: string
  public adjustmentFunction: string
  public auxSwitchChannelIndex: string

  constructor(index: string, adjustment: string, channel: string, min: string, max: string, func: string, switchChannel: string) {
    super()
    this.index = index
    this.channelIndex = channel
    this.adjustmentIndex = adjustment
    this.startStep = min
    this.endStep = max
    this.adjustmentFunction = func
    this.auxSwitchChannelIndex = switchChannel
  }
}
