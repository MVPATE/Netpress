// File: business.js
// This script fetches business news articles from the News API and displays them on a webpage.

const businessData = async () => {
    const apiKey = 'cced939be9024e9596e7f003b6222962';
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=business&apiKey=${apiKey}&pageSize=12`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);

        data.articles.forEach(article => {
            let articleElement = document.getElementById('business-news1');
            articleElement.innerHTML += `
                
                <div class="card-body">
                
                    <img src="${article.urlToImage}" class="img-fluid img-thumbnail float-end" alt="${article.title}">
                    <h7>${article.title}</h7>
                    <p class="card-text">${article.publishedAt}
                    <span> <a href="${article.url}" target="_blank" class="btn btn-link">Read more</a></span>
                    </p>
                </div>
                <hr>
            `;
        });

    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};
businessData()
const businessData2 = async () => {
    const apiKey = 'cced939be9024e9596e7f003b6222962';
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=business&apiKey=${apiKey}&pageSize=12`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);

        data.articles.forEach(article => {
            let articleElement2 = document.getElementById('business-news2');
            articleElement2.innerHTML += `
                
                <div class="card-body">
                    <img src="${article.urlToImage}" class="img-fluid img-thumbnail float-end" alt="${article.title}">
                    <h7>${article.title}</h7>
                    <p class="card-text">${article.publishedAt}
                    <span> <a href="${article.url}" target="_blank" class="btn btn-link">Read more</a></span>
                    </p>
                </div>
                <hr>
            `;
        });

    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};
businessData2()