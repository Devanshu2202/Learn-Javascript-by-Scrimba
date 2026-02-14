const superwoerform = document.getElementById("superwoerform")
superwoerform.addEventListener("submit",logchosensuperpower)


function logchosensuperpower(e){
    e.preventDefault()
 console.log(document.getElementById("superpowers").value);
     
    
}