const textList = [
    "Identify plant",
    "See gestures",
    "Count reps",
    "Feel emotions",
    "Sense colors",
    "Check safety"
  ];
  
  let currentTextIndex = 0;
  
  function changeText() {
    currentTextIndex = (currentTextIndex + 1) % textList.length; // Loop through the list
    document.getElementById("dynamic-text").textContent = textList[currentTextIndex];
    
    // Remove and re-add visible class for fade effect
    document.getElementById("dynamic-text").classList.remove("visible");
    setTimeout(() => {
      document.getElementById("dynamic-text").classList.add("visible");
    }, 2000); // Delay visible class addition for 300ms
  }
  
  setInterval(changeText, 5000); // Change text every 5 seconds
  