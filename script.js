
document.getElementById("yesBtn").addEventListener("click", () => {
  alert("I love you 😍");
  console.log("Migrakshi loved it!");
});

document.getElementById("NoBtn").addEventListener("click", () => {
  alert("Fir se soch lo...😍");
  console.log("She thinks you're cute 😏");
});

const container = document.getElementById('hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('pixel-heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (4 + Math.random() * 4) + 's';
  heart.style.opacity = Math.random();
  heart.style.transform = `scale(${Math.random() * 1.5 + 0.5}) rotate(45deg)`;
  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 300);

