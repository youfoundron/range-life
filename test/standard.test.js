/* eslint-disable */
import range from '../src/standard'
import {argsToResultFactory} from './util'

const argsToResult = argsToResultFactory(range)

describe('Standard export', () => {
  it('returns a num range when only first argument given', () => {
    argsToResult([4], [0, 1, 2, 3])
    argsToResult([-4], [0, -1, -2, -3])
  })

  it('returns a num range from start to end', () => {
    argsToResult([1, 5], [1, 2, 3, 4])
  })

  it('returns an integer stepped range', () => {
    argsToResult([0, 20, 5], [0, 5, 10, 15])
    argsToResult([0, -20, -5], [0, -5, -10, -15])
  })

  it('returns a decimal stepped range', () => {
    argsToResult([1, 4, 0.5], [1, 1.5, 2, 2.5, 3, 3.5])
    argsToResult([1, -2, -0.5], [1, 0.5, 0, -0.5, -1.0, -1.5])
  })

  it('handles step of 0',() => {
    argsToResult([1, 4, 0], [1, 1, 1]),
    argsToResult([1, -4, 0], [1, 1, 1, 1, 1])
  })
})
