
const studentName = "Gurinder Meelu";
const studentId = "200622633"; 

const CAT_API_KEY = "live_lgW3M82UAcp7m28gUNtaKbb0dRI2ze3sFJWcQpHoQshha8gJPqtnsFknVSZYknWG"; // Insert your API key from thecatapi.com
const CAT_API_URL = "https://api.thecatapi.com/v1/images/search";

// ========== DOM Elements ==========
const infoBtn = document.getElementById("showInfoBtn");
const studentInfo = document.getElementById("studentInfo");
const loadCatBtn = document.getElementById("loadCatBtn");
const apiDataDiv = document.getElementById("apiData");

// ========== Event Listeners ==========
infoBtn.addEventListener("click", () => {
  studentInfo.innerText = `Name: ${studentName}, ID: ${studentId}`;
});

loadCatBtn.addEventListener("click", () => {
  fetch(CAT_API_URL, {
    headers: { "x-api-key": CAT_API_KEY }
  })
  .then(response => response.json())
  .then(data => {
    const cat = data[0];

    // Clear previous data
    apiDataDiv.innerHTML = "";

    // Create elements to display
    const catImg = document.createElement("img");
    catImg.src = cat.url;
    catImg.alt = "Cute Cat";
    catImg.classList.add("cat-img");

    const text1 = document.createElement("p");
    text1.innerText = "Here is a random cat just for you!";

    const text2 = document.createElement("p");
    text2.innerText = `Image ID: ${cat.id}`;

    const text3 = document.createElement("p");
    text3.innerText = `Image Size: ${cat.width} x ${cat.height}`;

    // Append to div
    apiDataDiv.append(text1, text2, text3, catImg);
  })
  .catch(error => {
    console.error("Error fetching cat data:", error);
    apiDataDiv.innerHTML = "<p>Error loading cat image. Try again.</p>";
  });
});
