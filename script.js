const hugBtn = document.getElementById('hugBtn');
const loadingSection = document.getElementById('loadingSection');
const flavorText = document.getElementById('flavorText');
const barFill = document.getElementById('barFill');
const hugSection = document.getElementById('hugSection');

const flavorMessages = [
  "Calibrating cuddle coils...",
  "Generating warm fuzzies...",
  "Infusing virtual affection...",
  "I'm hungry...",
  "for hugs!",
  "Compressing emotional support...",
  "CUZ YOU MAKE MY EARFQUAKE",
  "Charging hug batteries...",
  "Activating snuggle sensors...",
  "Gay son or thot dauther?",
  "Preparing to embrace...",
  "I put to much work into this...",
   "Loading love algorithm...",
    "Optimizing hug parameters...",
    "Randomizing hug intensity...",
    "Random bullshit to fill up space...",
    "Engaging hug protocol...",
    "Calculating optimal hug duration...",
    "User feedback",
    "John: I got a hug from this page and it was great!",
    "Jane: I felt the love through the screen!",
    "Judas: I betrayed Jesus for this hug!",
    "Hugging the server...",
    "Should I kiss you? or is that too much?",
    "Yeah, thats too much...",

  "Finalizing squish protocol..."
];

hugBtn.addEventListener('click', () => {
  hugBtn.disabled = true;
  loadingSection.classList.remove('hidden');
  flavorText.textContent = "";
  barFill.style.width = "0%";

  let progress = 0;
  let msgIndex = 0;

  const interval = setInterval(() => {
    //make it incremate randomly from 1 to 5
    progress += Math.floor(Math.random() * 2) + 3; //
    barFill.style.width = `${progress}%`;

    if (msgIndex < flavorMessages.length) {
      flavorText.textContent = flavorMessages[msgIndex];
      msgIndex++;
    }

    if (progress >= 100) {
      clearInterval(interval);
      loadingSection.classList.add('hidden');
      hugSection.classList.remove('hidden');
      hugBtn.disabled = false;
    }
  }, 500);
});
