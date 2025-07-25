window.addEventListener("load", () => fetchNews("India"));

async function fetchNews(query) {
    try {
        const res = await fetch(`/news?q=${query}`);
        const data = await res.json();

        if (data.status !== "ok") {
            alert("Failed to load news.");
            return;
        }

        bindData(data.articles);
    } catch (err) {
        console.error(err);
        alert("Error fetching news");
    }
}
