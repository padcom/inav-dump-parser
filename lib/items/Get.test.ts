import Get from './Get'

describe('Get', () => {
  it('parse', () => {
    const input = 'get xyz_abc'

    const result = Get.parse(input.split(' ').slice(1))

    expect(result.name).toBe('xyz_abc')
  })
})
