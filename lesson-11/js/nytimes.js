// The URL for the Article Search API at nytimes.com
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
// STEP 1: Get your own API key and paste it below…
const key = 'H3AkJ4M0qONZ1bG2NSPSxmXle0g84wy4';
let url;
// Grab references to all the DOM elements you'll need to access
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');
// STEP 2: Add a submit event listener for the search form, referencing the fetchResults function as the callback
searchForm.addEventListener("submit", fetchResults);

// Functions
function fetchResults(event) {
    // Use preventDefault() to stop the form submitting
    event.preventDefault();
    // STEP 3: Assemble the full URL, according to the API documentation at the New York Times
    url = `${baseURL}?api-key=${key}&q=${searchTerm.value}&fq=document_type:("article")`;
    // Add start and end dates if needed
    if(startDate.value !==""){
        url += `&being_date=${startDate.value.replaceAll("-", "")}`;
    };
    if(endDate.value !==""){
        url += `&end_date=${endDate.value.replaceAll("-", "")}`;
    };
    // STEP 4: Use fetch() to pass the URL that we built as a request to the API service, then pass the JSON to the displayResults() function
    console.log(url);    

};

function displayResults(json) {
    // STEP 5: Log to the console the results from the API
    

    // Clear out the old results…
    while (section.firstChild) {
            section.removeChild(section.firstChild);
    };
    // STEP 6: Create the variable articles to capture the articles from the JSON object
    	

    if (articles.length === 0) {
        const para = document.createElement('p');
        para.textContent = 'No results returned.'
        section.appendChild(para);
    } else {
        for(let i = 0; i < articles.length; i++) {
            const article = document.createElement('article');
            const heading = document.createElement('h2');
            const link = document.createElement('a');
            const img = document.createElement('img');
            const para1 = document.createElement('p');

            const current = articles[i];
            console.log(current);
            // STEP 7a: Look at the console output from the API…
            
            // STEP 7b: Grab the content from the JSON for the hyperlink and the article teaser (snippet)
            

            if(current.multimedia.length > 0) {
                img.src = 'https://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            };
            // STEP 8: Put each article together as an ARTICLE element and append it as a child of the SECTION element in the HTML
            

            
        };
    };
};

// This example adapted from "Third-party APIs" at https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs
