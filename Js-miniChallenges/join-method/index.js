import { playlistArr } from './playlist.js'

/*
Challenge
1. Use the .join() method to remove 
   those annoying commas!
⚠️ You will need to chain two methods
   together to complete the challenge.
*/

const playlistHtml = playlistArr.map(function( play ){
    const {title,artist,albumArt} = play
     return `<section class="card">
    <div class="card-start">
        <img src="./images/${albumArt}">
    </div>
        <div class="card-mid">
            <h4 class="card-title">${title}</h4>
            <p class="card-artist">${artist}</p>
        </div>
    <div class="card-end">
        <p class="card-menu">...</p>
    </div>
</section>
    `
    
 }).join("")
   

 
document.getElementById('container').innerHTML = playlistHtml
