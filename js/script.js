// Constants for student info
const studentName = "Gurinder Meelu";
const studentId = "200622633"; 

// API key from The Cat API (you must generate one from https://thecatapi.com/)
const CAT_API_KEY = "YOUR_API_KEY_HERE"; // Replace this with your real API key
const CAT_API_URL = "https://api.thecatapi.com/v1/images/search";

// Show student info dynamically
document.addEventListener('DOMContentLoaded', () => {
  const infoBtn = document.getElementById("showInfoBtn");
  const studentInfo = document.getElementById("studentInfo");
  const loadCatBtn = document.getElementById("loadCatBtn");
  const apiDataDiv = document.getElementById("apiData");

  infoBtn.addEventListener("click", () => {
    studentInfo.innerText = `Name: ${studentName}, ID: ${studentId}`;
  });

  // Load a cat image from the API
  loadCatBtn.addEventListener("click", () => {
    fetch(CAT_API_URL, {
      headers: {
        "x-api-key": CAT_API_KEY
      }
    })
    .then(response => response.json())
    .then(data => {
      const imageUrl = data[0].url;

      // Clear existing content
      apiDataDiv.innerHTML = "";

      // Create image element
      const img = document.createElement("img");
      img.src = imageUrl;
      img.alt = "Random Cat";
      img.classList.add("cat-image");

      // Create text info
      const info = document.createElement("p");
      info.innerText = `Here's your random cat image! 🐾`;

      // Append both
      apiDataDiv.appendChild(info);
      apiDataDiv.appendChild(img);
    })
    .catch(error => {
      console.error("Error fetching cat image:", error);
      apiDataDiv.innerHTML = "<p>Failed to load cat image. Try again later.</p>";
    });
  });
});
