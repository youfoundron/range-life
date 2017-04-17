/* eslint-disable */
const argsToResultFactory = rangeFunc =>
  (args, resultArr) =>
    expect(rangeFunc(...args))
      .toEqual(expect.arrayContaining(resultArr))

const argsToErrorFactory = rangeFunc =>
  (args, err) =>
    expect(rangeFunc.bind(null, ...args))
      .toThrowError(err)

export {
  argsToResultFactory,
  argsToErrorFactory
}
