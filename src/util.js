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
  (...args) => args.length > 1 && typeof args[0] !== typeof args[1],
  TypeError('Arguments \'start\' and \'end\' must be the same type')
)

const handleDefaults = compose(
  throwIfStartTypeNotEndType,
  handleNullFirstArg,
  handleNoArgs
)

const throwIfStepIsNotInteger = throwIf(
  (...args) => !Number.isInteger(args[2]),
  TypeError('Argument \'step\' must be an integer')
)

export {
  compose,
  transformFunc,
  handleDefaults,
  throwIfStepIsNotInteger
}
