/* eslint-disable */
import range from '../src/index'
import * as errors from '../src/errors'
import {argsToResultFactory, argsToErrorFactory} from './util'

const argsToResult = argsToResultFactory(range)
const argsToError = argsToErrorFactory(range)

describe('Default export', () => {
  it('returns an empty array when no arguments are given', () => {
    argsToResult([], [])
  })

  it('returns an empty array when first and only argument is 0', () => {
    argsToResult([0], [])
  })

  it('returns an empty array when first argument is boolean', () => {
    argsToResult([true], [])
    argsToResult([false], [])
  })

  it('returns an empty array when first argument is an object', () => {
    argsToResult({}, [])
    argsToResult({foo: 'bar'}, [])
  })

  it('returns an empty array when first argument is an array', () => {
    argsToResult([[]], [])
    argsToResult([[1, 2, 3]], [])
  })

  it('returns an empty array when first argument is null or undefined', () => {
    argsToResult([null], [])
    argsToResult([undefined], [])
  })

  it('throws if start type is not end type', () => {
    argsToError([0, 'foo'], errors.StartTypeNotEndType)
  })

  it('throws if step is not a number', () => {
    argsToError([0, 4, 'foo'], errors.StepIsNotNumber)
  })

  it('throws if step is out of range', () => {
    argsToError([0, 4, -1], errors.StepIsOutOfRange)
    argsToError([0, -4, 1], errors.StepIsOutOfRange)
  })
})
