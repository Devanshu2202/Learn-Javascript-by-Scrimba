import placeholderPropertyObj from './properties/placeholderPropertyObj.js'
import propertyForSaleArr from './properties/propertyForSaleArr.js'


function getPropertyHtml(propertyArr = [placeholderPropertyObj]) { //default parameter
    return propertyArr.map(property => {
        const { propertyLocation, priceGBP, roomsM2, comment, image } = property
        console.log(image);
        
        const totalRoomSizeM2 = roomsM2.reduce((total, current) => total + current)

        console.log(totalRoomSizeM2)
        return `
    <section class="card">
        <img src="images/${image}">
        <div class="card-right">
            <h2>${propertyLocation}</h2>
            <h3>£${priceGBP}</h3>
            <p>${comment}</p>
            <h3>${totalRoomSizeM2} m&sup2;</h3>
        </div>
    </section>`
    })
}
/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr).join("")