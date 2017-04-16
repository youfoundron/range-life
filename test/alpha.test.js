/* eslint-disable */
import range from '../src/alpha'

const argsToResult = (args, resultArr) => {
  return expect(
    range(...args))
  .toEqual(
    expect.arrayContaining(resultArr))
}

describe('Alpha export', () => {
  it(
    'returns an inclusive array of lowercase letters',
    () => {
      argsToResult(['a', 'e'], ['a', 'b', 'c', 'd', 'e'])
      argsToResult(['e', 'a'], ['e', 'd', 'c', 'b', 'a'])
    }
  )

  it(
    'returns an inclusive array of uppercase letters',
    () => {
      argsToResult(['A', 'E'], ['A', 'B', 'C', 'D', 'E'])
      argsToResult(['E', 'A'], ['E', 'D', 'C', 'B', 'A'])
    }
  )

  it(
    'returns an inclusive array of integer stepped letters',
    () => {
      argsToResult(['a', 'e', 2], ['a', 'c', 'e'])
      argsToResult(['e', 'a', -2], ['e', 'c', 'a'])
      argsToResult(['A', 'E', 2], ['A', 'C', 'E'])
      argsToResult(['E', 'A', -2], ['E', 'C', 'A'])
    }
  )
})