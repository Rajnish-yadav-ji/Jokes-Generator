// Select Elements
const jokeText = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const shareBtn = document.getElementById("share-btn");
const themeToggle = document.getElementById("theme-toggle")

// API URL
const apiURL = "https://v2.jokeapi.dev/joke/Any?type=single";

// Function to Fetch Joke
async function getJoke() {
    try {
        // Disable button temporarily
        jokeBtn.disabled = true;
        jokeBtn.classList.add("pulsate");
        jokeBtn.innerText = "Fetching Joke... 😂";

        let response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        let data = await response.json();

        // Display joke
        jokeText.innerText = data.joke;

        // Button UI Updates
        setTimeout(() => {
            jokeBtn.innerText = "Get Another Joke";
            jokeBtn.disabled = false;
            jokeBtn.classList.remove("pulsate");
        }, 1000);

    } catch (error) {
        jokeText.innerText = "Oops! 😢 Failed to fetch a joke.";
        jokeBtn.innerText = "Try Again!";
        jokeBtn.disabled = false;
        jokeBtn.classList.remove("pulsate");
        console.error("❌ Error Fetching Joke:", error);
    }
}

// Event Listener
jokeBtn.addEventListener("click", getJoke);

themeToggle.addEventListener("click", () => {
    
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});