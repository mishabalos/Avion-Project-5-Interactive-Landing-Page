  /* HERO SECTION: GREETING IN DIFF LANGUAGES */

const greetings = [
  'Hello!',     // English
  'Hola!',      // Spanish
  'Bonjour!',   // French
  'Hallo!',     // German
  'Ciao!',      // Italian
  'こんにちは!', // Japanese
  'Привет!',   // Russian
  'Olá!',       // Portuguese
  '안녕하세요!',   //Korean
  '你好!'       // Chinese
];

// Function to update the greeting text
function updateGreeting(index = 0) {
  const hiElement = document.getElementById('hi');
  hiElement.textContent = greetings[index];

  let nextIndex = (index + 1) % greetings.length;

  // Call updateGreeting every 1.5 seconds
  setTimeout(() => updateGreeting(nextIndex), 1500);
}

if (location.pathname.indexOf('index.html') > -1 || location.pathname === '/') {
  updateGreeting();
}

document.addEventListener('DOMContentLoaded', (event) => {


/* FORM SECTION: GET USERNAME AND EMAIL TO POST A MESSAGE */

  if (location.pathname.indexOf('get-started') > -1) {
    const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from submitting the default way

      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;

      // Redirect to the thank you page
      window.location.href = `thankyou.html?username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}`;
    });

    // thank you page
  } else if (location.pathname.indexOf('thankyou') > -1) {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    const email = urlParams.get('email');

    const messageDiv = document.getElementById('ty-message');
    messageDiv.innerHTML = `Thanks for signing up, ${username}! <br> We sent an email to ${email}. Please verify your account setup.`;
  }
});

/* CHANGE COLOR FEATURE */

const duolingoColors = [
  "#1cb0f6",
  "#ff4b4b",
  "#ffc800",
  "#ff9600",
  "#ce82ff",
  "#2b70c9",
  "#ffcaff",
];

function getRandomColor() {
  return Math.floor(duolingoColors.length * Math.random());
}

const changeColorSection = document.getElementById("changeColor");
const aboutSection = document.getElementById("about-section");

function changeBackgroundColor() {
  const color = duolingoColors[getRandomColor ()];

  changeColorSection.style.backgroundColor = color;
  aboutSection.style.backgroundColor = color;
}

const btn = document.querySelector("#btn");
btn.onclick = changeBackgroundColor;
