fetch("https://apis.scrimba.com/jsonplaceholder/todos",{
  method:"POST",
  body:JSON.stringify({
    title: "Buy milk",
    completed: false
  }),
  headers: {
    "Content-Type": "application/json"
  }
})
.then((res)=>{
  return res.json()
})
.then((data)=>{
  console.log(data);
  
})