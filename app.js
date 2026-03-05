const main = document.getElementById("main");
const secEl = document.getElementById("seconds");
const msEl = document.getElementById("milliseconds");

const colors = [
"Red","Green","Blue","Yellow","Orange","Purple","Pink","Brown","Black","White",
"Gray","Cyan","Magenta","Lime","Indigo","Violet","Gold","Silver","Beige","Coral",
"Crimson","Khaki","Lavender","Maroon","Mint","Navy","Olive","Peach","Plum","Salmon",
"Tan","Teal","Turquoise","Azure","Ivory","Chocolate","Aqua","Aquamarine","Bisque","BlanchedAlmond",
"BlueViolet","BurlyWood","CadetBlue","Chartreuse","CornflowerBlue","Cornsilk","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray",
"DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue",
"DarkSlateGray","DeepPink","DeepSkyBlue","DimGray","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro",
"GhostWhite","GoldenRod","GreenYellow","HoneyDew","HotPink","IndianRed","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow",
"LightGray","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSteelBlue","LightYellow","Linen",
"MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue"
];

// state
let score = 0, start = 0, timer, started = false, over = false;

// create boxes (modern way)
main.innerHTML = Array.from({ length: 10 }, () =>
  `<div class="boxelm" style="background:${colors[Math.random()*colors.length|0]}"></div>`
).join("");

// event delegation (advanced JS 🔥)
main.addEventListener("click", e => {
  if (!e.target.classList.contains("boxelm") || over) return;

  // start on first click
  if (!started) {
    started = true;
    start = Date.now();

    timer = setInterval(() => {
      const diff = Date.now() - start;
      const s = diff / 1000 | 0;

      secEl.textContent = String(s).padStart(2, "0");
      msEl.textContent = String(diff % 1000).padStart(3, "0");

      if (s >= 60) {
        clearInterval(timer);
        over = true;
        alert(`⏰ Time up! Score: ${score}`);
      }
    }, 10);
  }

  // score + color change
  score++;
  e.target.style.background = colors[Math.random()*colors.length|0];
});