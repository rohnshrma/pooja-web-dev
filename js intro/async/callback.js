function sendRequest(cb) {
  var request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      cb(JSON.parse(request.responseText), undefined);
    }
    if (request.readyState === 4 && request.status !== 200) {
      cb(undefined, "Something went wrong!");
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  request.send();
}

// sendRequest((data, err) => {
//     if (data) {
//       console.log(data);

//     } else {
//       console.error(err);
//     }
//   });

// callback hell
sendRequest((data, err) => {
  if (data) {
    console.log(data);
    sendRequest((data, err) => {
      if (data) {
        console.log(data);
        sendRequest((data, err) => {
          if (data) {
            console.log(data);
            sendRequest((data, err) => {
              if (data) {
                console.log(data);
                sendRequest((data, err) => {
                  if (data) {
                    console.log(data);
                  } else {
                    console.error(err);
                  }
                });
              } else {
                console.error(err);
              }
            });
          } else {
            console.error(err);
          }
        });
      } else {
        console.error(err);
      }
    });
  } else {
    console.error(err);
  }
});
