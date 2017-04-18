/* eslint-disable */
import range from '../src/values'
import * as errors from '../src/errors'
import {argsToResultFactory, argsToErrorFactory} from './util'

const argsToResult = argsToResultFactory(range)
const argsToError = argsToErrorFactory(range)

const VALUES = [
  'One', 'Two', 'Three', 'Four', 'Five',
  'Six', 'Seven', 'Eight', 'Nine', 'Ten'
]

describe('Values export', () => {
  it('returns a range of values when no step', () => {
    argsToResult([0, 4, VALUES], VALUES.slice(0, 4))
  })

  it('returns a range of values in reverse when no step', () => {
    argsToResult([4, 0, VALUES], VALUES.slice(1, 4).reverse())
  })

  it('returns a range of values with a step', () => {
    argsToResult([0, 4, 1, VALUES], VALUES.slice(0, 4))
    argsToResult([4, 0, -1, VALUES], VALUES.slice(1, 4).reverse())
    argsToResult([0, 4, 2, VALUES], ['One', 'Three'])
    argsToResult([4, 0, -2, VALUES], ['Five', 'Three'])
  })

  it('throws if step is not an integer', () => {
    argsToError([0, 4, 0.5, VALUES], errors.StepIsNotInteger)
  })
})
