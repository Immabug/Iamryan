onload = () => {
  document.body.classList.remove("container");
};

function blinkAnimation() {
  // Add a class when the element is hovered
  document.querySelector(".next_btn").addEventListener("mouseover", function () {
    this.classList.add("blink");
  });

  // Remove the class when the mouse leaves the element (optional)
  document.querySelector(".next_btn").addEventListener("mouseout", function () {
    this.classList.remove("blink");
  });
}

blinkAnimation();

function audioPlay(){
  document.addEventListener('click', function() { document.getElementById('playAudio').play() }, { once: true });
}

audioPlay();

function asd(){
  let samebtn = document.getElementById("same_btn");
  let popup = document.querySelector(".popup");
  let message = document.querySelector(".message");
samebtn.addEventListener('click', function() {
  samebtn.style.display ="none";
  popup.style.display ="none";
  message.classList.add("visible");
});
}

asd();


