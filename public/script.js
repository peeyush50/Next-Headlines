const API_KEY = "64b73b5f330948c599d643b7f013068f";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

function reload() {
    window.location.reload();
}

async function fetchNews(query) {
    try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const res = await fetch(`${proxyUrl}${url}${query}&apiKey=${API_KEY}`);
        const data = await res.json();

        if (data.status !== "ok") {
            console.error("API error:", data);
            alert("Failed to load news. Please try again later.");
            return;
        }

        bindData(data.articles);
    } catch (error) {
        console.error("Fetch failed:", error);
        alert("Something went wrong. Please check your connection or API.");
    }
}
