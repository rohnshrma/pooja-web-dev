import sendRequest from "./promises.js";

async function handleSendRequest(url) {
  try {
    const result = await sendRequest(url);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
handleSendRequest("https://jsonplaceholder.typicode.com/todos/1");
