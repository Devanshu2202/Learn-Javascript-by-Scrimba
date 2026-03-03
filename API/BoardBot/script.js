


/**
Challenge: 

1. Fetch a random activity from the Bored API
url: https://apis.scrimba.com/bored/api/activity

2. Display the text of the activity in the browser
*/

const dataTitle = document.getElementById("datatitle")
fetch("https://apis.scrimba.com/bored/api/activity")
.then((res)=>{
return res.json()
})
.then((data)=>{
    console.log(data);
    render(data.activity)
    
})

function render(activity){
    dataTitle.textContent = activity
}

