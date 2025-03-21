var words = [
  "apple",
  "jam",
  "cherry",
  "monkey",
  "pineapple",
  "juice",
  "ibm",
  "cars",
];

var regex = /^[A-Za-z]$/;
var index = Math.floor(Math.random() * words.length);
var word = words[index];
var hidden_word = [];

var already_guessed_characters = [];

var allowed_attempts = 10;

for (var i = 0; i < word.length; i++) {
  hidden_word.push("_");
}

console.log("Welcome to the Hangman game\n");
while (allowed_attempts > 0) {
  alert(`Word : ${hidden_word.join(" ")}`);
  var guess = prompt("Enter your guess : ").toLowerCase();
  if (guess.length > 1 || !regex.test(guess)) {
    alert("Guess Must be a single alphabet!");
    continue;
  }

  if (already_guessed_characters.includes(guess)) {
    alert(`${guess} is already guessed! Try a different character.`);
    continue;
  }

  already_guessed_characters.push(guess);
  if (word.includes(guess)) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        hidden_word[i] = guess;
      }
    }
    alert("Correct Guess!");
  } else {
    allowed_attempts -= 1;
    alert(`Incorrect Guess! Allowed Attempts remaining : ${allowed_attempts}`);
  }

  if (!hidden_word.includes("_")) {
    alert(`Congratulations you've guess the correct word : ${word}`);
    break;
  }
}

if (hidden_word.includes("_")) {
  alert(`You've failed to guess the correct word : ${word}`);
}
