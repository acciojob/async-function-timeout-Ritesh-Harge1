//your JS code here. If required.
// Function to create a delay using Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle button click
async function showMessage() {
  // Get input values
  const text = document.getElementById("text").value;
  const delayTime = parseInt(document.getElementById("delay").value, 10);
  const output = document.getElementById("output");

  // Clear previous output
  output.textContent = "";

  // Wait for the specified delay
  await delay(delayTime);

  // Display message
  output.textContent = text;
}

// Attach event listener to button
document.getElementById("btn").addEventListener("click", showMessage);
