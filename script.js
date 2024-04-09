const QUOTE_URL= 'https://api.quotable.io/random';
const TWEET_URL= "https://twitter.com/intent/tweet?text="
const LOADING_TEXT="...Loading";

const quoteElement=document.getElementById("quoteElement");
const authorElement= document.getElementById("authorElement");

async function getData(){
    quoteElement.textContent=LOADING_TEXT;
    quoteElement.classList.add('hidden');
    authorElement.textContent='';
    authorElement.classList.add('hidden');
    console.log("button clicked");
    const response= await fetch(QUOTE_URL);
    const data= await response.json();
    quoteElement.textContent=data.content;
    quoteElement.classList.remove('hidden');
    authorElement.textContent=data.author;
    authorElement.classList.remove('hidden');
}

function tweet(){
    if(!quoteElement.textContent)
        return;
    const text=`${quoteElement.textContent} ~${authorElement.textContent}`;
    window.open(`${TWEET_URL}${text}`);
}

getData();