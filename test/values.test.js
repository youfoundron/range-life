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
  it('throws if step is not an integer', () => {
    argsToError([0, 4, 0.5, VALUES], errors.StepIsNotInteger)
  })
})
