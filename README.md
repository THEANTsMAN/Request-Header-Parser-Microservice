# Request Header Parser Microservice
-----------------------

[![Lint](https://github.com/THEANTsMAN/Request-Header-Parser-Microservice/actions/workflows/lint.yml/badge.svg)](https://github.com/THEANTsMAN/Request-Header-Parser-Microservice/actions/workflows/lint.yml)

-----------------------

Runs an micro service that parses the request header and returns a json object showing the following information:
-  IP address in the header that the request came from,
-  Language in the request header
-  The user agents software platform in the header.

-----------------------

This is built to be used with glitch and an example of the app can be found [Here](https://charming-screen.glitch.me/)

-----------------------

### Running the App

The app consists of a single file called server.js.

To setup the app the repository can be cloned, and then run

```
npm install
```
This will install the required dependencies for the app.

The app can then be run using either of the following commands:

```javascript
PORT=XXXX npm start
```

OR

```javascript
PORT=XXXX node server.ts
```

Where __XXXX__ is the port number you want it to run on.

-----------------------

#### Notes

This microservice was built to run on both glitch.com and on a local machine, so your mileage may vary depending on how you use the microservice.
The main difference between running on glitch (i.e an external server) vs a localhost (i.e your personal machine) is the way the IP address is handled and found in the header. For the local machine there is likely not an x-forwarded-for key, so instead the host key is used, and visa versa for running one glitch or other external server.
