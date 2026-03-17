

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = ()=>{
  return(

    <header >
      <img id="image" src="Group.png" />
      <h1>ReactFacts</h1>
    </header>
  )

}

const Maintext = ()=>{
  return(

    <main>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      
    </main>
  )
}

root.render(

  <div id="reactfact">
    <Header/>
    <Maintext/>
  </div>
);
