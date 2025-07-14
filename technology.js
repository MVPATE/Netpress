// File: technology.js
// This script fetches technology news articles from the News API and displays them on a webpage.
 console.log('Technology News Fetcher Initialized');
const technologyData = async () => {
            
   
    try {
        const response = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_9846519cc3fe41a6b385a641f9aa07bf&q=technology&country=in&language=en`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);

        data.results.forEach(article => {
            let articleElement = document.getElementById('technology-news1');
            articleElement.innerHTML += `
            
                <div class="card-body">
                    <img src="${article.image_url}" class="img-fluid img-thumbnail float-end" alt="${article.title}">
                    <h7>${article.title}</h7>
                    <p class="card-text">${article.pub_Date}
                    <span> <a href="${article.source_url}" target="_blank" class="btn btn-link">Read more</a></span>
                    </p>
                </div>
                <hr>
            `;
        });

    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};
technologyData()
const technologyData2 = async () => {
    const apiKey = 'cced939be9024e9596e7f003b6222962';
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}&pageSize=10`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);

        data.articles.forEach(article => {
            let articleElement2 = document.getElementById('technology-news2');
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
technologyData2()