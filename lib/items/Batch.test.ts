import Batch from './Batch'

describe('Batch', () => {
  it('parse', () => {
    const input = 'batch start'

    const result = Batch.parse(input.split(' ').slice(1))

    expect(result.command).toBe('start')
  })
})
