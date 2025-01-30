// Function to retrieve time and convert to UTC
  function updateUTCTime() {
    const now = new Date();
    const time = now.toUTCString();
    document.getElementById('time').textContent = time;
  }
  
  // Update the time every second
  setInterval(updateUTCTime, 1000);
  
  // Display the time immediately on page load
  updateUTCTime();