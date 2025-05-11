# Next-Headlines

**Next-Headlines** is a web app that fetches the latest news headlines based on a query using the NewsAPI. It allows you to explore the news and stay updated on current events.

## Features

- Search for news by country, category, or keyword.
- Displays articles with images, titles, and descriptions.
- Each article opens in a new tab when clicked.

## Demo

Check out the live demo here:  
[Next-Headlines Live](https://peeyush50.github.io/Next-Headlines/)

## Technologies Used

- **HTML**: Structure of the website
- **CSS**: Styling the website
- **JavaScript**: Fetching data from the NewsAPI and updating the UI dynamically
- **NewsAPI**: Used to fetch news data

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/peeyush50/Next-Headlines.git
    ```

2. Open `index.html` in your browser to view the app locally.

## API Key

- The app uses **NewsAPI** to fetch news articles. You can obtain your own API key by signing up at [NewsAPI.org](https://newsapi.org/).
- Replace the value of the `API_KEY` variable in the `script.js` file with your own API key.

## CORS Issue (for live deployment)

- NewsAPI restricts direct requests from the browser for the **free plan**. If you're deploying this app on a service like **GitHub Pages**, you may encounter **CORS issues**.
- For testing purposes, you can unlock temporary access to the **CORS proxy** by visiting [CORS-Anywhere](https://cors-anywhere.herokuapp.com/corsdemo). This is only for development and not recommended for production.


