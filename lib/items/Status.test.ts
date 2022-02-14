import Status from './Status'

describe('Status', () => {
  it(`parse"`, () => {
    const input = 'status'

    const result = Status.parse(input.split(' ').slice(1))

    expect(result).toBeDefined()
  })
})
