/* eslint-disable */
import range from '../src/index'

const argsToResult = (args, resultArr) =>
  expect(
    range(...args))
  .toEqual(
    expect.arrayContaining(resultArr))

describe('Default export', () => {
  it(
    'returns an empty array when no arguments are given',
    () => { argsToResult([], []) }
  )

  it(
    'returns an empty array when first and only argument is 0',
    () => { argsToResult([0], []) }
  )

  it(
    'returns an empty array when first argument is boolean',
    () => {
      argsToResult([true], [])
      argsToResult([false], [])
    }
  )

  it(
    'returns an empty array when first argument is an object',
    () => {
      argsToResult({}, [])
      argsToResult({foo: 'bar'}, [])
    }
  )

  it(
    'returns an empty array when first argument is an array',
    () => {
      argsToResult([[]], [])
      argsToResult([[1, 2, 3]], [])
    }
  )

  it(
    'returns an empty array when first argument is null or undefined',
    () => {
      argsToResult([null], [])
      argsToResult([undefined], [])
    }
  )
})
