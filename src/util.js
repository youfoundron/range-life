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

const handleNullFirstArg = transformFunc(
  (next, ...args) =>
    !['number', 'integer'].includes(typeof args[0])
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

const throwIfStepIsNotInteger = throwIf(
  (...args) => !Number.isInteger(args[2]),
  errors.StepIsNotInteger
)

const handleDefaults = compose(
  throwIfStepIsNotNumber,
  throwIfStartTypeNotEndType,
  handleNullFirstArg,
  handleNoArgs
)

export {
  compose,
  transformFunc,
  handleDefaults,
  throwIfStepIsNotInteger
}
