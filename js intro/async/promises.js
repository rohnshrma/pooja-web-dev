// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => {
//     response.json().then((data) => {
//       console.log("data =>", data);
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// function sendRequest() {
//   return new Promise((res, rej) => {
//     var age = parseInt(prompt("Enter your age : "));
//     setTimeout(() => {
//       if (age >= 18) console.log("Eligible");
//       else console.log("Not Eligble");
//     }, 10000);
//   });
// }

// sendRequest()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

export default function sendRequest(url) {
  return new Promise((res, rej) => {
    var request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        res(JSON.parse(request.responseText));
      }
      if (request.readyState === 4 && request.status !== 200) {
        rej("Something went wrong!");
      }
    });
    request.open("GET", url);
    request.send();
  });
}

// sendRequest("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => {
//     console.log(data);
//     sendRequest("https://jsonplaceholder.typicode.com/todos/1").then((data) => {
//       console.log(data);
//       sendRequest("https://jsonplaceholder.typicode.com/todos/1").then(
//         (data) => {
//           console.log(data);
//           sendRequest("https://jsonplaceholder.typicode.com/todos/1").then(
//             (data) => {
//               console.log(data);
//             }
//           );
//         }
//       );
//     });
//   })
//   .catch((err) => console.log(err));
