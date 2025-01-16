// const textList = [
//     "Identify plant",
//     "See gestures",
//     "Count reps",
//     "Feel emotions",
//     "Sense colors",
//     "Check safety"
//   ];
  
//   let currentTextIndex = 0;
  
//   function changeText() {
//     currentTextIndex = (currentTextIndex + 1) % textList.length; // Loop through the list
//     document.getElementById("dynamic-text").textContent = textList[currentTextIndex];
    
//     // Remove and re-add visible class for fade effect
//     document.getElementById("dynamic-text").classList.remove("visible");
//     document.getElementById("dynamic-text").classList.add("hidden");
//     setTimeout(() => {
//       document.getElementById("dynamic-text").classList.add("visible");
//       document.getElementById("dynamic-text").classList.remove("hidden");
//     }, 0); // Delay visible class addition for 300ms
//   }
  
//   setInterval(changeText, 5000); // Change text every 5 seconds


// const timestamps = [
//       { start: 0, end: 4, index: 0 },
//       { start: 5, end: 9, index: 1 },
//       { start: 10, end: 14, index: 2 },
//       { start: 15, end: 19, index: 3 },
//       { start: 20, end: 24, index: 4 },
//       { start: 25, end: 29, index: 5 },
//       // ... Add more timestamp/index pairs as needed
//     ];


const textList = [
  "Identify plant",
  "See gestures",
  "Count reps",
  "Feel emotions",
  "Sense colors",
  "Check safety"
];

let currentTextIndex = 0;
let video = document.getElementById("HeroVideo");
let dynamicText = document.getElementById("dynamic-text");

video.addEventListener('timeupdate', function() {
  let currentTime = Math.floor(video.currentTime);
  let timestampMatch = timestamps.find(ts => currentTime >= ts.start && currentTime <= ts.end);

  if (timestampMatch !== undefined) {
      if (currentTextIndex !== timestampMatch.index) {
          currentTextIndex = timestampMatch.index;
          updateText();
      }
  }
});

function updateText() {
  dynamicText.textContent = textList[currentTextIndex];
  dynamicText.classList.remove("visible");
  dynamicText.classList.add("hidden");
  setTimeout(() => {
      dynamicText.classList.add("visible");
      dynamicText.classList.remove("hidden");
  }, 0);
}

const timestamps = [
  { start: 0, end: 4, index: 0 },
  { start: 5, end: 9, index: 1 },
  { start: 10, end: 14, index: 2 },
  { start: 15, end: 19, index: 3 },
  { start: 20, end: 24, index: 4 },
  { start: 25, end: 29, index: 5 }
  // Add more timestamp/index pairs as needed
];

// Start with initial text
updateText();