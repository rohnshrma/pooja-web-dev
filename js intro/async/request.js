// The first block of code is for making an HTTP request using `XMLHttpRequest` (commonly known as Ajax).
// It creates an HTTP request to fetch data from a remote server.

var request = new XMLHttpRequest(); // Create a new instance of XMLHttpRequest object

// The following block of code listens for changes to the request’s `readyState` property.
request.addEventListener("readystatechange", () => {
  // Add an event listener for when the `readyState` of the request changes
  // `readyState` represents the state of the request (0 to 4). We check if it's 4 (done) and if the status is 200 (success).
  if (request.readyState === 4 && request.status === 200) {
    // If the request is complete and the status code is 200 (successful)
    console.log(JSON.parse(request.responseText)); // Parse and log the response from the server in JSON format
  }
  // If the request is complete but there’s an error (status other than 200)
  if (request.readyState === 4 && request.status !== 200) {
    console.error("Something went wrong!"); // Log an error if the request fails
  }
});

// Now the actual request is being set up, specifying the HTTP method and URL.
request.open("GET", "https://jsonplaceholder.typicode.com/todos"); // Prepare the request to make a GET request to a URL
request.send(); // Send the request to the server

// 1.	XMLHttpRequest (XHR): This is an older API used for making HTTP requests in JavaScript. It’s used here to send a request to a server and handle the response asynchronously.
// 2.	Event Listeners: addEventListener is used to listen to events such as readystatechange. This event is fired whenever the readyState property of the XMLHttpRequest changes.
// 3.	ReadyState: This represents the state of the request:
// •	0: UNSENT – The request has not yet been opened.
// •	1: OPENED – The request has been opened.
// •	2: HEADERS_RECEIVED – The request has received the response headers.
// •	3: LOADING – The request is in progress.
// •	4: DONE – The request is completed.
// 4.	Status Code: The HTTP status code (like 200 for success or 404 for not found) helps determine whether the request was successful or not.
