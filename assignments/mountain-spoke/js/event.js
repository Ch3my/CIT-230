const countdown = document.querySelector(".countdown");

// Set the launch date
// Date needs to be formatted Month day, yyyy
const launchDate = new Date("May 21, 2018 00:00:00").getTime();

// Update Every Second
const intvl = setInterval(() => {
  // Get todays date and time in miliseconds
  const now = new Date().getTime();
  
  // Distance from now to launch date in miliseconds
  const distance = launchDate - now;
  
  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins =  Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds =  Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the result
  countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
`;
  
  // if date passed 
  if(distance < 0 ) {
     clearInterval(intvl);
    // Style and output text
    countdown.style.color = '#17a2b8';
    countdown.innerHtml = 'Launched!';
  }
}, 1000);