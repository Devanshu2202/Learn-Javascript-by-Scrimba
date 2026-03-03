/**
Challenge:

1. Google for "how to use fetch with json"
2. Should find a top result from MDN
3. MANUALLY copy over the fetch, but using the URL below 👇
    https://dog.ceo/api/breeds/image/random
    https://jsonplaceholder.typicode.com/comments
    https://jsonplaceholder.typicode.com/todos
    https://jsonplaceholder.typicode.com/users
    
*/
let dataStore = document.getElementById("datastore")
fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    // console.log(data);
    render(data)
    
})

function render(data){
   let dataItems = "";

   for(let i=0; i<data.length; i++){
    dataItems += `
    <li><p>${data[i].name}</p></li>`
   }
   dataStore.innerHTML = dataItems
}
