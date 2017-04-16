import { handleDefaults } from './util'

const range = (start, end, step) => {
  const result = []

  if (step === undefined) {
    if (end === undefined) {
      end = start
      start = 0
    }
    step = start < end ? 1 : -1
  }

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

export default handleDefaults(range)
