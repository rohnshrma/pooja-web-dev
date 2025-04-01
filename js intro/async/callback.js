// The code below is refactored using a function that accepts a callback function (cb) for handling responses.

// Define a function `sendRequest` that takes a callback function `cb` as an argument.
function sendRequest(cb) {
  var request = new XMLHttpRequest(); // Create a new XMLHttpRequest object

  // Adding an event listener for the `readystatechange` event.
  request.addEventListener("readystatechange", () => {
    // Listen for changes in request state
    // If the request is complete and successful (status 200)
    if (request.readyState === 4 && request.status === 200) {
      cb(JSON.parse(request.responseText), undefined); // Call the callback function with the data and no error
    }
    // If the request is complete but unsuccessful (status != 200)
    if (request.readyState === 4 && request.status !== 200) {
      cb(undefined, "Something went wrong!"); // Call the callback with undefined data and an error message
    }
  });

  // Open a GET request to the specified URL
  request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  request.send(); // Send the request to the server
}

// This is a simplified usage of the `sendRequest` function with a callback.
// Uncomment to see its functionality
// sendRequest((data, err) => {
//     if (data) {
//       console.log(data);  // If there’s data, log it to the console
//     } else {
//       console.error(err);  // If there’s an error, log it
//     }
//   });

// Callback hell begins here. Multiple `sendRequest` calls are nested within each other to simulate callback hell.
sendRequest((data, err) => {
  // First request
  if (data) {
    console.log(data); // Log the data
    sendRequest((data, err) => {
      // Nested request
      if (data) {
        console.log(data); // Log the data
        sendRequest((data, err) => {
          // Another nested request
          if (data) {
            console.log(data); // Log the data
            sendRequest((data, err) => {
              // Another nested request
              if (data) {
                console.log(data); // Log the data
                sendRequest((data, err) => {
                  // Final nested request
                  if (data) {
                    console.log(data); // Log the data
                  } else {
                    console.error(err); // Log any error
                  }
                });
              } else {
                console.error(err); // Log any error
              }
            });
          } else {
            console.error(err); // Log any error
          }
        });
      } else {
        console.error(err); // Log any error
      }
    });
  } else {
    console.error(err); // Log any error
  }
});

// 1.	Callback Functions: The code is refactored to use callback functions. A callback is a function passed into another function as an argument that is executed when the asynchronous operation is completed.
// 2.	Callback Hell: This refers to the situation where multiple nested callbacks make the code difficult to read and maintain. The nesting of multiple sendRequest calls creates a deeply nested structure.
