import * as errors from './errors'

const compose = (...funcs) => {
  if (funcs.length === 0) return x => x
  if (funcs.length === 1) return funcs[0]
  return funcs.reduce((f, g) => (...args) => f(g(...args)))
}

const transformFunc = transform =>
  next => (...args) =>
    transform(next, ...args)

const handleNoArgs = transformFunc(
  (next, ...args) =>
    args.length === 0
      ? []
      : next(...args)
)

const argsLengthIsOne = (...args) => args.length === 1

const firstArgIsZero = arg => arg === 0

const firstArgIsNumOrString = arg =>
  ['number', 'string'].includes(typeof arg)

const firstArgIsNoOp = (...args) =>
  firstArgIsZero(...args) ||
  !firstArgIsNumOrString(...args)

const handleNoOpFirstArg = transformFunc(
  (next, ...args) =>
    argsLengthIsOne(...args) &&
    firstArgIsNoOp(...args)
      ? []
      : next(...args)
)

const throwIf = (predicate, err = Error()) => transformFunc(
  (next, ...args) => {
    if (predicate(...args)) throw err
    return next(...args)
  }
)

const throwIfStartTypeNotEndType = throwIf(
  (...args) =>
    args.length > 1 &&
    typeof args[0] !== typeof args[1],
  errors.StartTypeNotEndType
)

const throwIfStepIsNotNumber = throwIf(
  (...args) =>
    args[2] !== undefined &&
    typeof args[2] !== 'number',
  errors.StepIsNotNumber
)

const throwIfStepIsOutOfRange = throwIf(
  (...args) =>
    (args[2] < 0 && args[0] < args[1]) ||
    (args[2] > 0 && args[0] > args[1]),
  errors.StepIsOutOfRange
)

const throwIfStepIsNotInteger = throwIf(
  (...args) => args[2] && !Number.isInteger(args[2]),
  errors.StepIsNotInteger
)

const handleDefaults = compose(
  throwIfStepIsOutOfRange,
  throwIfStepIsNotNumber,
  throwIfStartTypeNotEndType,
  handleNoOpFirstArg,
  handleNoArgs
)

export {
  compose,
  transformFunc,
  handleDefaults,
  throwIfStepIsNotInteger
}
