import Item from '../Item'

export default class Serial extends Item {
  static KEY = 'serial'

  static parse(tokens: string[]) {
    const [ identifier, functionMask, mspBaudrate, gpsBaudrate, telemetryBaudrate, peripherialBaudrate ] = tokens
    return new Serial(identifier, functionMask, mspBaudrate, gpsBaudrate, telemetryBaudrate, peripherialBaudrate)
  }

  public identifier: string
  public functionMask: string
  public mspBaudrate: string
  public gpsBaudrate: string
  public telemetryBaudrate: string
  public peripherialBaudrate: string

  constructor(identifier: string, functionMask: string, mspBaudrate: string, gpsBaudrate: string, telemetryBaudrate: string, peripherialBaudrate: string) {
    super()
    this.identifier = identifier
    this.functionMask = functionMask
    this.mspBaudrate = mspBaudrate
    this.gpsBaudrate = gpsBaudrate
    this.telemetryBaudrate = telemetryBaudrate
    this.peripherialBaudrate = peripherialBaudrate
  }
}
