import registry from './registry'

export class SettingsParser {
  parse(input: string[], KNOWN_ITEMS = registry) {
    const items = []

    input.forEach(line => {
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
