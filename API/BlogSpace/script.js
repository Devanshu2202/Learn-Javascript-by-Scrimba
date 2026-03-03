/**
 * Challenge:
 * 
 * Send a request to the JSON Placeholder API using fetch
 * URL: https://apis.scrimba.com/jsonplaceholder/posts
 * 
 * Log the response data to the console
 */

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data);
    
})