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
    displayQuote(json);
  } catch(err){
    console.log(err)
    alert('Failed');
  }
}

function displayQuote(quote){
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

const endpoint = 'https://my-bao-server.herokuapp.com/api/breadpuns';

const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click',getQuote);

var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};


//https://random-quote-generator.herokuapp.com/api/quotes/random
