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

// const background = document.getElementById("background-image")

// fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     console.log(data);
//     const image = data.urls.raw
//     // console.log("image",image);

//     document.body.style.backgroundImage = `url('${image}')`
// })

async function getbackgroundimage() {
  try {
    const imageRes = await fetch(
      "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=AI",
    );
    const imageData = await imageRes.json();
    const name = imageData.user.name;
    
    document.getElementById("author-name").textContent =`By: ${name}`;
    document.body.style.backgroundImage = `url('${imageData.urls.full}')`;
  } catch (err) {
    console.log("image error", err);
  }
}
getbackgroundimage();
