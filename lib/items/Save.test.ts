import Save from './Save'

describe('Save', () => {
  it(`parse`, () => {
    const input = 'save'
    const result = Save.parse(input.split(' ').slice(1))
    expect(result).toBeInstanceOf(Save)
  })
})
