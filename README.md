# Express.js sendFile Error: ENOENT: no such file or directory

This repository demonstrates a common error encountered when using Express.js's `sendFile` method: the `ENOENT` error, which indicates that the specified file does not exist.  The example shows how to handle this error gracefully.

## Bug

The `bug.js` file contains a simple Express.js server that attempts to serve an `index.html` file.  If `index.html` is not present in the same directory, the server will throw an `ENOENT` error.

## Solution

The `bugSolution.js` file demonstrates how to handle this error using asynchronous error handling (async/await) and a check for file existence.

## How to Reproduce

1. Clone this repository.
2. Run `bug.js` (ensure `index.html` is *not* present in the same directory).
3. Observe the error.
4. Run `bugSolution.js` (you can create a dummy `index.html` for testing).