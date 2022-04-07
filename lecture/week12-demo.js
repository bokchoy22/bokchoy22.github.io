//document.querySelector('button');
//document.querySelector('.new-quote button');
//const quotebutton document.querySelector('#js-new-quote');
//using ID

async function getQuote(){
  console.log("quote button was clicked");
  try{
    const response = await fetch(endpoint);
    if (!response.ok){
      throw Error(response.statusText)
    }

    const json = await response.json();
    console.log(json);
    displayQuote(json.fact);
  } catch(err){
    console.log(err)
    alert('Failed');
  }
}

function displayQuote(quote){
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

const endpoint = 'http://catfact.ninja/fact';

const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click',getQuote);


//https://random-quote-generator.herokuapp.com/api/quotes/random
