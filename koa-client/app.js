const request = require('request');
const url = 'http://webapp:3000';

function processResponse(data) {
  console.log(data);
}

function handleError(error) {
  console.log('Error:', error);
}

function makeRequest() {
  request.get(
    {
      url: url,
      json: true,
      headers: { 'User-Agent': 'request' }
    },
    (err, res, data) => {
      if (err) {
        handleError(err);
      } else {
        processResponse(data);
      }
    }
  );
}

function loop() {
  setTimeout(() => {
    console.log('Making a request');
    makeRequest();
    loop();
  }, 5000);
}

loop();
