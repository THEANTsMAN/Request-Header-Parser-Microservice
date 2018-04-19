# Request Header Parser Microservice
**********************

Runs an micro service that parses the request header and returns a json object showing the following information:
-  IP address in the header that the request came from,
-  Language in the request header
-  The user agents software platform in the header.

**********************

This is built to be used with glitch and an example of the app can be found [Here](https://charming-screen.glitch.me/)

______________________

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
PORT=XXXX node server.js
```

Where __XXXX__ is the port number you want it to run on.
