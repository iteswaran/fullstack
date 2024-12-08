const votes = {
    "Option 1": 0,
    "Option 2": 0,
    "Option 3": 0,
  };
  
  function vote(option) {
    // Increment the vote count for the selected option
    votes[option]++;
  
    // Update the live results
    updateResults();
  }
  
  function updateResults() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results
  
    // Display updated vote counts
    for (const option in votes) {
      const resultItem = document.createElement("p");
      resultItem.textContent = `${option}: ${votes[option]} vote(s)`; // Correct usage of template literals
      resultsDiv.appendChild(resultItem);
    }
  }
  
  // Initialize results display
  updateResults();
  