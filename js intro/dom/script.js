var head = document.querySelector("#head");

// selectors

// id
// console.log(document.getElementById("head"));
// class
// console.log(document.getElementsByClassName("para"));
// tag
// console.log(document.getElementsByTagName("h1"));
// querySelector
// console.log(document.querySelector("#head"));
// console.log(document.querySelector(".para"));
// console.log(document.querySelector("h1"));
// querySelectorAll
// console.log(document.querySelector("#head"));
// console.log(document.querySelectorAll(".para"));
// console.log(document.querySelectorAll("h1"));

// get and set

// console.log(document.querySelector("#head").innerHTML);
// console.log(document.querySelector("#head").innerText);

// document.querySelector("#head").innerText = "bye bye <i> pooja</i>";
// document.querySelector("#head").innerHTML = "bye bye <i> pooja</i>";

// head.style.color = "teal";

// head.style = "background-color:red; color:#fff";

// console.log(head.style);

// console.log(head.classList);

// head.classList.add("hello");
// head.classList.remove("hello");

// console.log(head.classList);

// console.log(head.attributes);
// console.log(head.getAttribute("id"));
// head.setAttribute("id", "bye");

// head.addEventListener("click", () => (head.style.backgroundColor = "grey"));

document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    console.log("Spacebar pressed");
  }
});
