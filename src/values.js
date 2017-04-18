import {
  compose,
  transformFunc,
  handleDefaults,
  throwIfStepIsNotInteger
} from './util'

const normalizeParams = transformFunc(
  (next, start, end, step, values) => {
    if (Array.isArray(step)) {
      values = step
      step = undefined
    }
    if (step === undefined) {
      if (end === undefined) {
        end = start
        start = 0
      }
      step = start < end ? 1 : -1
    }
    return next(start, end, step, values)
  }
)

const range = (startIndex, endIndex, step, values) => {
  const result = []

  if (step === 0) {
    for (
      let currIndex = startIndex;
      currIndex < Math.abs(startIndex - endIndex);
      currIndex++
    ) result.push(values[currIndex])
  } else {
    for (
      let currIndex = startIndex;
      (endIndex - currIndex) * step;
      currIndex += step
    ) result.push(values[currIndex])
  }

  return result
}

export default compose(
  normalizeParams,
  handleDefaults,
  throwIfStepIsNotInteger
)(range)
