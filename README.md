# Server101

## Installation
Install with `npm i`

## Running

The seven example HTTP servers can be started with `npm run s0` through to `npm run s7`

* `npm run s0` — A very basic HTTP service that generates and serves a single file when requested from http://localhost:8080/hello-world.txt and returns a 404 for all other requests.

* `npm run s1` — An improvement on `s0` that moves all responses to a single `send` function, removing repeated similar code

* `npm run s2` — Extends `s1`, adding the ability to send any file that exists within a _web root_ folder (rather than generating a single hello world message).  This program makes use of a `files.mjs` module that provides a `readFile` method, which takes care of all the storage access.

* `npm run s3` — Extends `s2` by reintroducing dynamic content and combines this with also serving static files.  When a request is received it is first checked against the dynamic content url, and if there is a match, a function is used to generate the response; but if there's no match, the existing `sendFile` method is used to respond with a file or a 404.

* `npm run s4` — Here we go back to square one, but instead of using the HTTP module, we adopt _ExpressJS_.  This code acts as an HTTP file server and requires just four lines of code.

* `npm run s5` — Extends `s4` by adding a dynamic route (like `s3`) - when a request is received to /dyn1/, the server will respond with the current date and time. Requests to other URLs are handled by the static middleware as in `s4`. 

* `npm run s6` — Functionally identical to `s5` but with comments removed to highlight how little code is actually necessary. 