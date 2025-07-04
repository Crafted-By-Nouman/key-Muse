const pianoKeys = document.querySelectorAll(".piano-keys .key"),
  volumeSlider = document.querySelector(".volume-slider input");

let allKeys = [],
  audio = new Audio(`tunes/a.wav`);

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  if (!clickedKey) return;

  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
};
volumeSlider.addEventListener("input", handleVolume);

const pressedKey = (e) => {
  const key = e.key.toLowerCase();
  if (allKeys.includes(key)) playTune(key);
};
document.addEventListener("keydown", pressedKey);

document.addEventListener("touchstart", (e) => {
  if (e.target.classList.contains("key")) {
    const key = e.target.dataset.key;
    playTune(key);
  }
});
