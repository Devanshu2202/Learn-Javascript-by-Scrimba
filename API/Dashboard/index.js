/**
 * Challenge: get a random image from Unsplash and set it as the background
 *
 * Part 1:
 *
 * URL: https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature
 * (You can change the "query" at the end to whatever theme you want)
 *
 * Change the body's backgroundImage to:
 * url(<insert the URL of the iamge from the API here>)
 *
 * (You may need to dig around the response body a bit to find this URL)
 *
 * (Note I've already added some CSS to resize the image within the window.
 * Instructions for this were found on CSS Tricks:
 * https://css-tricks.com/perfect-full-page-background-image/#awesome-easy-progressive-css3-way)
 */

async function getbackgroundimage() {
  try {
    const imageRes = await fetch(
      "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=AI",
    );
    const imageData = await imageRes.json();
    const name = imageData.user.name;
    
    document.getElementById("author").textContent =`By: ${name}`;
    document.body.style.backgroundImage = `url('${imageData.urls.full}')`;
  } catch (err) {
    console.log("image error", err);

    document.body.style.backgroundImage = `url(https://plus.unsplash.com/premium_photo-1681578990806-c0f5dd8984bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D)`

  }
}
getbackgroundimage();

/**
Challenge: Get current data on a cryptocurrency from the list below
    * bitcoin
    * dogecoin
    * ethereum
    * litecoin

1. Search the API docs for an endpoint that will 
   get you the "current data for a coin"
   (https://www.coingecko.com/api/documentations/v3#/)

2. Execute a test request from the API docs and skim through 
   the data for anything that you may find interesting to use
   in the dashboard
*/


async function getCoin(){
    try{
        const coinData = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin")

        const data = await coinData.json()
        console.log(data);
        

        document.getElementById("crypto").innerHTML = `
        <img src="${data.image.thumb}" />
        <strong>${data.name}</strong>
        <p> $ ${data.market_data.current_price.usd}</p>
        <p> $ ${data.market_data.high_24h.usd}</p>
        <p> $ ${data.market_data.low_24h.usd}</p>
        `

    }catch(err){
        console.log(err)
    }
}

getCoin()

