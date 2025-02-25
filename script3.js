// Get Quotes from API
// javascript web  / 20 projects
// basically our browser window is represented by
// async meaning 
// In JavaScript, async is a keyword used to define a 
// function that operates asynchronously. An async function 
// implicitly returns a promise. The aw
// w a t c h the spelling , typing 
//     https://twiter.com/intent/tweet
//
// let apiQuotes = [];
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
// creat  const for loader 
const loader = document.getElementById('loader');
// let apiQuotes = [];

// Show Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true; 
}   

// Hide Loading
 function complete() {
   quoteContainer.hidden = false;
   loader.hidden = true;
 }


// Show New Quote - write a new functon
function newQuote() {
// Pick a random quote from apiQuote array
const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
// Check if Author field is blank and replace 
//  with 'Unknown'
if (!quote.author) {
  authorText.textContent = 'Unknown';
} else { 
  authorText.textContent = quote.author;
} 
// Check Quote length  to determine styling
// nuber represent how many characters 
if (quote.text.length > 60) {
  quoteText.classList.add('long-quote');
} else {
  quoteText.classList.remove('long-quote');
}

quoteText.textContent = quote.text;
}

//  Get Quotes from API 
// async function getQuotes() {
//  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
// try {
//   const response = await fetch(apiUrl);
//   apiQuotes = await response.json();
// newQuote();
// } catch (error){
//   // catch error  
//  }
// }

// Tweet Quote 
function tweetQuote() {
  const twitterUrl = `https://twiter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
window.open(twitterUrl, '_blank');
}

// Event Listeners 
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// ON load 
// getQuotes();
// getQuotes();
// newQuote();
loading();