document.querySelector(".push-alerts").addEventListener("click", () => {
  const adminPanel = document.querySelector(".admin-panel")
  const thankYouMessage = document.querySelector(".thank-you-message")
  const inputs = document.querySelectorAll(".text-view") // Select all input fields

  // Hide the form
  adminPanel.classList.add("hidden")

  // Show the thank-you message
  thankYouMessage.classList.remove("hidden")

  // Bring back the form after 5 seconds
  setTimeout(() => {
    thankYouMessage.style.display = "none"
    adminPanel.classList.remove("hidden")

    // Clear all input fields
    inputs.forEach((input) => (input.value = ""))
  }, 1000) // Time in milliseconds
})
