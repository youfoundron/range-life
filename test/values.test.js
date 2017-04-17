/* eslint-disable */
import range from '../src/values'
import * as errors from '../src/errors'

const argsToResult = (args, resultArr) =>
  expect(
    range(...args))
  .toEqual(
    expect.arrayContaining(resultArr))

const VALUES = [
  'One', 'Two', 'Three', 'Four', 'Five',
  'Six', 'Seven', 'Eight', 'Nine', 'Ten'
]

describe('Values export', () => {
  it('throws if step is not an integer', () => {
    expect(range.bind(null, 0, 4, 0.5, VALUES))
      .toThrowError(errors.StepIsNotInteger)
  })
})
