/* eslint-disable */
import range from '../src/values'

const argsToResult = (args, resultArr) =>
  expect(
    range(...args))
  .toEqual(
    expect.arrayContaining(resultArr))

describe('Values export', () => {
  
})
