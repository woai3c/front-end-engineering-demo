const { add, abs } = require('../src/main')

test('add', () => {
    expect(add(10, 10)).toBe(20)
    expect(() => add('10', {})).toThrow(TypeError)
})

test('abs', () => {
    expect(abs(1)).toBe(1)
    expect(abs(0)).toBe(0)
    expect(abs(-1)).toBe(1)
    expect(() => abs('abc')).toThrow(TypeError)
})