console.log("Hello, World!");

// main.js

// Replace with your actual API key
const getData1 = async () => {
    const apiKey = 'cced939be9024e9596e7f003b6222962';
    try {
        const response = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_9846519cc3fe41a6b385a641f9aa07bf&q=technology&country=in&language=en`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        


        data.articles.forEach(article => {
            let articleElement2 = document.getElementById('news-1');
            articleElement2.innerHTML += `

                  

                <div class="card-body">
                <img src="${article.urlToImage}" class="img-fluid img-thumbnail float-end" alt="${article.title}">
                   <h7>${article.title}</h7>
                    <p class="card-text">${article.publishedAt}
                    <a href="${article.url}" target="_blank" class="btn btn-link">Read more</a>
                    </p>
                    
                    
                </div>
                
                <hr>
            `;
        });
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
getData1();

const getData2 = async () => {
    const apiKey = 'cced939be9024e9596e7f003b6222962';
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=entertainment&pageSize=8&apiKey=${apiKey}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        


        data.articles.forEach(article => {
            let articleElement2 = document.getElementById('news-2');
            articleElement2.innerHTML += `

                  

                <div class="card-body">
                <img src="${article.urlToImage}" class="img-fluid img-thumbnail float-end" alt="${article.title}">
                   <h7>${article.title}</h7>
                    <p class="card-text">${article.publishedAt}
                    <a href="${article.url}" target="_blank" class="btn btn-link">Read more</a>
                    </p>
                    
                    
                </div>
                
                <hr>
            `;
        });
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
getData2();

console.log("Hello, World!");
// main.js

// Replace with your actual API key
const getData3 = async () => {
    const apiKey = 'cced939be9024e9596e7f003b6222962';
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=business&pageSize=8&apiKey=${apiKey}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        



        data.articles.forEach(article => {
            let articleElement = document.getElementById('news-3');

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
}
getData3();

const getData4 = async () => {
    const apiKey = 'cced939be9024e9596e7f003b6222962';
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=business&apiKey=${apiKey}&pageSize=8`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
       



        data.articles.forEach(article => {
            let articleElement2 = document.getElementById('news-4');
            articleElement2.innerHTML += `

                  

                <div class="card-body">
                <img src="${article.urlToImage}" class="img-fluid img-thumbnail float-end" alt="${article.title}">
                    <h7>${article.title}</h7>
                    <p class="card-text">${article.publishedAt}
                    <a href="${article.url}" target="_blank" class="btn btn-link">Read more</a>
                    </p>
                    
                    
                </div>
                
                <hr>
            `;
        });
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
getData4();





