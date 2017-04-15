import {
  compose,
  transformFunc,
  handleDefaults,
  throwIfStepIsNotInteger
} from '../util'

const normalizeValues = transformFunc(
  (next, ...args) =>
    Array.isArray(args[2])
      ? next(args[0], args[1], 0, args[2])
      : next(...args)
)

const range = (start, end, step, values) => {

}

export default compose(
  throwIfStepIsNotInteger,
  normalizeValues,
  handleDefaults
)(range)
