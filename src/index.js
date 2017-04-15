import rangeNum from './standard'
import rangeAlpha from './alpha'
import rangeValues from './values'

export default (...args) => {
  // return result of rangeValues if values array is detected
  if (
    Array.isArray(args[2]) ||
    Array.isArray(args[3])
  ) return rangeValues(...args)

  // return result of rangeAlpha if strings are detected
  if (
    typeof args[0] === 'string'
  ) return rangeAlpha(...args)

  // return result of rangeNum otherwise
  return rangeNum(...args)
}
