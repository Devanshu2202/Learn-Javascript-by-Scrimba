
async function getImage() {
  try {
    const res = await fetch(
      "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
    )

    const data = await res.json()

    document.body.style.backgroundImage = `url(${data.urls.regular})`

    document.getElementById("author").textContent = `By: ${data.user.name}`
  } catch (err) {
    document.body.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080)"

    document.getElementById("author").textContent = `By: Dodi Achmad`
  }
}

getImage()


async function getCrypto() {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin")

    console.log("res",res);
    

    if (!res.ok) {
      throw Error("Something went wrong")
    }

    const data = await res.json()

    document.getElementById("crypto-top").innerHTML = `
        <img src="${data.image.small}" />
        <span>${data.name}</span>
    `

    document.getElementById("crypto").innerHTML += `
        <p>🎯: $${data.market_data.current_price.usd}</p>
        <p>👆: $${data.market_data.high_24h.usd}</p>
        <p>👇: $${data.market_data.low_24h.usd}</p>
    `
  } catch (err) {
    console.error(err)
  }
}

getCrypto()


function updateTime() {
  const now = new Date()

  const formattedTime = now
    .toLocaleString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .toUpperCase()

  document.getElementById("time").textContent = formattedTime
}

updateTime()
setInterval(updateTime, 1000)


async function getWeather(lat, lon) {
  try {
    const res = await fetch(
      `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`
    )

    const data = await res.json()

    const temp = Math.trunc(data.main.temp)
    const city = data.name
    const icon = data.weather[0].icon

    document.getElementById("weather").innerHTML = `
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" />
        <p>${temp}°C</p>
        <p>${city}</p>
    `
  } catch (err) {
    console.log(err)
  }
}


navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude
  const lon = position.coords.longitude

  console.log("Latitude:", lat)
  console.log("Longitude:", lon)

  getWeather(lat, lon)
})