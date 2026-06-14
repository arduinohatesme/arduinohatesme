import './style.css';

const text_element = document.querySelector("#text");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

async function typeText(t, element) {
  for (const letter of t) {
    let min = 50;
    let max = 100;
    if (letter === ' ') {
      min += 30;
      max += 30;
    } else if (letter in ['q', 'w', 'z', 'y', 'g', 'h']) {
      min += 20;
      max += 20;
    } else if (letter in ['.', ',', ';', ':', '?', '/', '!']) {
      min += 50;
      max += 50;
    }
    await sleep(randInt(min, max))
    element.textContent += letter;
  }
}

typeText("watch me type out a very long sentence with more characters. this will show more behavior than before.", text_element);
