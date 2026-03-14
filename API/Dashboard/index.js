fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature",
)
  .then((res) => res.json())
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById("author").textContent = ` By: ${data.user.name}`;
  })
  .catch((err) => {
    // Use a default background image/author
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`;
    document.getElementById("author").textContent = ` By: Dodi Achmad`;
  });

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong");
    }
    return res.json();
  })
  .then((data) => {
    document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `;
    document.getElementById("crypto").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `;
  })
  .catch((err) => console.error(err));

/**
 * Challenge: log the current time to the console, formatted
 * like this:
 *
 * 1:30 PM
 *
 * Use Google and Stack Overflow to find the best way.
 *
 * Good luck! 👍
 */

const now = new Date();
const formattedTime = now.toLocaleString([], {
  hour: 'numeric',
  minute: "2-digit",
  hour12: true,
}).toUpperCase()

console.log("formattedTime", formattedTime);
document.getElementById("time").textContent = formattedTime
// Example output: "1:30 PM" (output may vary slightly based on user's browser locale)

fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=28.5355&lon=77.3910&units=metric")
  .then(res => res.json())
  .then(data => {
      console.log(data)

      const name = data.name

      console.log("name",name);
      
      const temp = Math.trunc(data.main.temp)

      document.getElementById("weather").innerHTML= `<p>${temp}°C</p>
      <p>${name}</p>
      `
      

     
  })
