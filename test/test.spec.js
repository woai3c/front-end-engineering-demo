const add = require('../src/main')

test('add', () => {
    expect(add(10, 10)).toBe(20)
    expect(() => add('10', {})).toThrow(TypeError)
})