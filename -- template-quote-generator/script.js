let apiQuotes = [];

// Show new Quote
function newQuote() {
  //Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //   const quote = localQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

// Get Quotes from API
async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    // console.log(apiQuotes[12]); //to get array number 12
    newQuote();
  } catch (error) {
    //error
  }
}

// On load
getQuotes();

// //Another way to set quotes data
// function newQuote2() {
//   const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//   console.log(quote);
// }

// newQuote2();
