import {
  compose,
  transformFunc,
  handleDefaults,
  throwIfStepIsNotInteger
} from './util'

const aLowerCharCode = 97
const aUpperCharCode = 65

const isLowerLetter = charCode => charCode >= aLowerCharCode

const normalizeParams = transformFunc(
  (next, start, end, step) => {
    if (step === undefined) {
      if (end === undefined) {
        end = start
        start = isLowerLetter(end) ? aLowerCharCode : aUpperCharCode
      }
      step = start < end ? 1 : -1
    }
    start = start && start.charCodeAt && start.charCodeAt()
    end = end && end.charCodeAt && end.charCodeAt()
    return next(start, end, step)
  }
)

const range = (startCharCode, endCharCode, step) => {
  const result = []

  if (step === 0) {
    for (let i = 0; i <= Math.abs(startCharCode - endCharCode); i++) {
      result.push(String.fromCharCode(startCharCode))
    }
  } else {
    for (let valCharCode = startCharCode; (endCharCode - valCharCode) * step >= 0; valCharCode += step) {
      result.push(String.fromCharCode(valCharCode))
    }
  }

  return result
}

export default compose(
  throwIfStepIsNotInteger,
  handleDefaults,
  normalizeParams
)(range)
