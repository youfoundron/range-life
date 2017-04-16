export const StartTypeNotEndType =
  TypeError('Arguments \'start\' and \'end\' must be the same type')

export const StepIsNotNumber =
  TypeError('Argument \'step\' must be a number')

export const StepIsOutOfRange =
  RangeError('Argument \'step\' sign must follow direction of the range')

export const StepIsNotInteger =
  TypeError('Argument \'step\' must be an integer')
