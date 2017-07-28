
/**
 * Module dependencies.
 */

const StandardHttpError = require('standard-http-error');
const httpErrors = require('../');
const errors = require('../errors');

/**
 * Test `easy-http-errors`.
 */

describe('easy-http-errors', () => {
  const mappedErrors = errors.reduce((result, error) => {
    result[error.name] = error;

    return result;
  }, {});

  it('should create all http-errors', () => {
    for (const name in httpErrors) {
      try {
        throw new httpErrors[name]();
      } catch (e) {
        expect(e).toBeInstanceOf(StandardHttpError);
        expect(e.name).toEqual(mappedErrors[name].name);
        expect(e.code).toEqual(mappedErrors[name].status);
        expect(e.message).toEqual(mappedErrors[name].message);
      }
    }
  });

  it('should create errors with a custom message and properties', () => {
    for (const name in httpErrors) {
      try {
        throw new httpErrors[name]('foobar', { qux: 'biz' });
      } catch (e) {
        expect(e.code).toEqual(expect.any(Number));
        expect(e.message).toEqual('foobar');
        expect(e.qux).toEqual('biz');
      }
    }
  });
});
