# INav dump parser library

This library helps you parse into objects all the entries from an INav dump.

## Example usage

First we need to load the content of the dump to memory.
Assuming you're using Node.js you can use `readFileSync` from `fs` package:

```
const lines = fs.readFileSync('./data/settings.txt').toString().split('\n')
```

Then you just need to instantiate the `SettingsParser` and call it's `parse(lines)` method:

```
import { SettingsParser } from 'inav-dump-parser'

const lines = fs.readFileSync('./data/settings.txt').toString().split('\n')
const items = new SettingsParser().parse(lines)
```
