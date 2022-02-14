import { createInterface } from 'readline'
import { PassThrough } from 'stream'

import registry from './registry.mjs'

export class SettingsParser {
  parse(buffer, KNOWN_ITEMS = registry) {
    const items = []

    const input = new PassThrough()
    input.end(buffer)
    const reader = createInterface({ input })
    reader.on('line', line => {
      const [ command, ...tokens ] = line.split(' ').filter(item => item.trim())
      if (command === undefined) {
        // skipping empty lines
      } else if (command?.startsWith('#')) {
        // TODO: enable parsing comment with flight controller information
      } else if (KNOWN_ITEMS[command]) {
        items.push(KNOWN_ITEMS[command].parse(tokens))
      } else {
        console.log('Unknown command', command)
      }
      // console.log('Line:', tokens)
    })
  }
}
