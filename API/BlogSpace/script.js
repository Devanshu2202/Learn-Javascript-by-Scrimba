fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    const postsArr = data.slice(0, 5);
    let html = "";
    for (let post of postsArr) {
      html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `;
    }
    document.getElementById("blog-list").innerHTML = html;
  });

/**
 Challenge:
 
 * Listen for the "submit" event on the form (which will happen when the button is clicked)
    * (Don't forget to preventDefault on the form so it doesn't refresh your page. Google "form preventDefault" if you're not sure what I'm talking about)
 * Combine the title value and body value into an object (with a "title" property and "body" property)
 * Log the object to the console

*/
let myForm = document.getElementById("my-form");
let postTitleInput = document.getElementById("post-title")
let postBodyInput = document.getElementById("post-body")
// const postBtn = document.getElementById("post-btn");
myForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const postTitle = postTitleInput.value
    const postBody = postBodyInput.value

  const value = {
    title: postTitle,
    body: postBody, 
  };
  console.log(value);

  postTitleInput.value = ""
  postBodyInput.value = ""
});

