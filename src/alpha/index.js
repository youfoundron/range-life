import {
  compose,
  handleDefaults,
  throwIfStepIsNotInteger
} from '../util'

const range = (start, end, step) => {

}

export default compose(
  throwIfStepIsNotInteger,
  handleDefaults
)(range)
