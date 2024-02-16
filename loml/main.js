/*global variable */
var seconds = document.getElementById("count");
let count = 10;

function getRandomHexCode() {
  // Generate a random number between 0 and 16777215 (2^24 - 1)
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  // Ensure the color code has six digits by padding with zeros if needed
  return "#" + "0".repeat(6 - randomColor.length) + randomColor;
}

// Example usage
function setCount() {
  const randomHexCode = getRandomHexCode();
  seconds.textContent = count;
  console.log(count);
  seconds.style.color = randomHexCode;
     count--;
}

function countdown() {
  const countdownInterval = setInterval(function () {
    if (count >= 8) {
      const randomHexCode = getRandomHexCode();
      seconds.textContent = "Hi!";
      console.log(count);
      seconds.style.color = randomHexCode;
      
      count--;

    } else if (count >= 6) {
      const randomHexCode = getRandomHexCode();
      seconds.textContent = "Ready?";
      console.log(count);
      seconds.style.color = randomHexCode;
      count--;

    } else if (count >0) {
      setCount();
   

    } else {

      window.location.href="./flower/flower.html";
      clearInterval(countdownInterval);
    }
  }, 1000);
}

countdown();
