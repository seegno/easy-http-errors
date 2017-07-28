# Easy Http Errors

[![npm](https://img.shields.io/npm/v/easy-http-errors.svg?style=flat-square)](https://npmjs.org/package/easy-http-errors)
![node](https://img.shields.io/node/v/easy-http-errors.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/seegno/easy-http-errors/master.svg?style=flat-square)](https://travis-ci.org/seegno/easy-http-errors)
[![Coverage Status](https://img.shields.io/coveralls/seegno/easy-http-errors/master.svg?style=flat-square)](https://coveralls.io/github/seegno/easy-http-errors?branch=master)

A preset of HTTP errors that can be easily used to throw errors in your applications.

## Installation

### NPM

```sh
npm i easy-http-errors --save
```

### Yarn

```sh
yarn add easy-http-errors
```

## Usage

```js
// ES6 import.
import { BadRequestError } from 'easy-http-errors';

// Throw the default bad request.
throw new BadRequestError();

// Throw a bad request with a custom message and properties.
throw new BadRequestError('Ups, this is a bad request', { foo: 'bar' });
```

## List of errors

| Status Code | Name                               |
| :---------: | -----------------------------------|
| 400         | BadRequestError                    |
| 401         | UnauthorizedError                  |
| 402         | PaymentRequiredError               |
| 403         | ForbiddenError                     |
| 404         | NotFoundError                      |
| 405         | MethodNotAllowedError              |
| 406         | NotAcceptableError                 |
| 407         | ProxyAuthenticationRequiredError   |
| 408         | RequestTimeoutError                |
| 409         | ConflictError                      |
| 410         | GoneError                          |
| 411         | LengthRequiredError                |
| 412         | PreconditionFailedError            |
| 413         | PayloadTooLargeError               |
| 414         | URITooLongError                    |
| 415         | UnsupportedMediaTypeError          |
| 416         | RangeNotSatisfiableError           |
| 417         | ExpectationFailedError             |
| 418         | ImATeapotError                     |
| 421         | MisdirectedRequestError            |
| 422         | UnprocessableEntityError           |
| 423         | LockedError                        |
| 424         | FailedDependencyError              |
| 425         | UnorderedCollectionError           |
| 426         | UpgradeRequiredError               |
| 428         | PreconditionRequiredError          |
| 429         | TooManyRequestsError               |
| 431         | RequestHeaderFieldsTooLargeError   |
| 451         | UnavailableForLegalReasonsError    |
| 500         | InternalServerError                |
| 501         | NotImplementedError                |
| 502         | BadGatewayError                    |
| 503         | ServiceUnavailableError            |
| 504         | GatewayTimeoutError                |
| 505         | HTTPVersionNotSupportedError       |
| 506         | VariantAlsoNegotiatesError         |
| 507         | InsufficientStorageError           |
| 508         | LoopDetectedError                  |
| 509         | BandwidthLimitExceededError        |
| 510         | NotExtendedError                   |
| 511         | NetworkAuthenticationRequiredError |

## Tests

Run the tests from the root directory:

```sh
npm test
```

## Contributing & Development

### Contributing

Found a bug or want to suggest something? Take a look first on the current and closed [issues](https://github.com/seegno/easy-http-errors/issues). If it is something new, please [submit an issue](https://github.com/seegno/easy-http-errors/issues/new).

### Develop

It will be awesome if you can help us evolve `easy-http-errors`. Want to help?

1. [Fork it](https://github.com/seegno/easy-http-errors).
2. `npm install`.
3. Hack away.
4. Run the tests: `npm test`.
5. Create a [Pull Request](https://github.com/seegno/easy-http-errors/compare).
