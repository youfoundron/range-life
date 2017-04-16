import {
  compose,
  transformFunc,
  handleDefaults
} from './util'

const normalizeParams = transformFunc(
  (next, start, end, step) => {
    if (step === undefined) {
      if (end === undefined) {
        end = start
        start = 0
      }
      step = start < end ? 1 : -1
    }
    return next(start, end, step)
  }
)

const range = (start, end, step) => {
  const result = []

  if (step === 0) {
    for (let i = start; i < Math.abs(end - start); i++) {
      result.push(start)
    }
  } else {
    for (let val = start; (end - val) * step > 0; val += step) {
      result.push(val)
    }
  }

  return result
}

export default compose(
  handleDefaults,
  normalizeParams
)(range)
