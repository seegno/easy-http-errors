'use strict';

/**
 * Module dependencies.
 */

const StandardHttpError = require('standard-http-error');
const errors = require('./errors');

/**
 * Error class factory.
 */

function factory(options) {
  return class extends StandardHttpError {

    /**
     * Class name.
     */

    static get name() {
      return options.name;
    }

    /**
     * Constructor.
     */

    constructor(message, properties) {
      super(options.status, message || options.message, properties);
    }
  };
}

/**
 * Export `easy-http-errors`.
 */

module.exports = errors.reduce((result, error) => {
  result[error.name] = factory(error);

  return result;
}, {});
