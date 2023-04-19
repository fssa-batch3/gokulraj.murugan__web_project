
// Product Create starts
function product_details() {
    let product_id = Math.floor(Math.random() * 50)
    let crypto_name2 = document.getElementById("crypto_name2").value;
    let username = document.getElementById("username").value;
    let crypto = document.getElementById("crypto").value;
    let money = document.getElementById("money").value;

    let res;
    let product_details = JSON.parse(localStorage.getItem("product_details")) ?? [];


    let product = {
        "product_id": product_id,
        "crypto_name": crypto_name2,
        "username": username,
        "no_of_coins": crypto,
        "money": money,
    }

    product_details.push(product)
    localStorage.setItem("product_details", JSON.stringify(product_details))
    window.location.href = "exchange.html"
}

let check = document.getElementById("sell");
check.addEventListener("click", e => {
    e.preventDefault()
    product_details()
})
// Product Create ends







// Product Read starts
product_detail = JSON.parse(localStorage.getItem("product_details"))
console.log(product_detail)


for (let i = 0; i < product_detail.length; i++) {

    // <div class="onecard">
    let onecard = document.createElement("div")
    onecard.setAttribute("class", "onecard")
    document.querySelector(".cards").prepend(onecard)

    // <div class="profile">
    let profile = document.createElement("div")
    profile.setAttribute("class", "profile")
    onecard.append(profile)

    // <img src="../Assets/Images/profile.png" class="user_photo" alt="">
    let user_photo = document.createElement("img")
    user_photo.setAttribute("src", "../Assets/Images/profile.png")
    user_photo.setAttribute("class", "user_photo")
    user_photo.setAttribute("alt", "error_found")
    profile.append(user_photo)

    // <div class="coin_details">
    let coin_details = document.createElement("div")
    coin_details.setAttribute("class", "coin_details")
    profile.append(coin_details)

    // <div class="coin_details2">
    let coin_details2 = document.createElement("div")
    coin_details2.setAttribute("class", "coin_details2")
    coin_details.append(coin_details2)


    // <img src="../Assets/Images/Logo/btc.png" width="12%" alt="" class="crypto_image">
    let crypto_image = document.createElement("img")
    crypto_image.setAttribute("src", "../Assets/Images/Logo/btc.png")
    crypto_image.setAttribute("class", "crypto_image")
    crypto_image.setAttribute("alt", "error_found")
    crypto_image.setAttribute("width", "12")
    coin_details2.append(crypto_image)


    //  <h4 class="crypto_name2">Bitcoin</h4>
    let cryoto_name2 = document.createElement("h4")
    cryoto_name2.setAttribute("class", "cryoto_name2")
    cryoto_name2.innerText = product_detail[i]["crypto_name"]
    coin_details2.append(cryoto_name2)

    // <h4 class="username">Username</h4>
    let username = document.createElement("h4")
    username.setAttribute("class", "username")
    username.innerText = product_detail[i]["username"]
    coin_details.append(username)

    // <div class="exchange">
    let exchange = document.createElement("div")
    exchange.setAttribute("class", "exchange")
    onecard.append(exchange)

    // <input type="number" name="crypto" id="crypto" disabled>
    let crypto = document.createElement("input")
    crypto.setAttribute("type", "number")
    crypto.setAttribute("name", "crypto")
    crypto.setAttribute("id", "crypto")
    crypto.setAttribute("disabled", "")
    crypto.value = product_detail[i]["no_of_coins"]
    exchange.append(crypto)

    // <br>
    let space = document.createElement("br")
    exchange.append(space)


    // <input type="number" name="price" id="price" disabled>
    let price = document.createElement("input")
    price.setAttribute("type", "number")
    price.setAttribute("name", "price")
    price.setAttribute("id", "price")
    price.setAttribute("disabled", "")
    price.value = product_detail[i]["money"]
    exchange.append(price)

    // <br>
    let space2 = document.createElement("br")
    exchange.append(space2)

    // <button class="buttons">Edit</button>
    let edit_button = document.createElement("button")
    edit_button.setAttribute("class", "buttons")
    edit_button.setAttribute("dataset-keyword", product_detail[i]["product_id"])
    edit_button.setAttribute("id", "edit")
    edit_button.innerText = "Edit"
    exchange.append(edit_button)

    // <a href="" class="buy_link">
    let buy_link = document.createElement("a")
    buy_link.setAttribute("href", "#")
    buy_link.setAttribute("class", "buy_link")
    exchange.append(buy_link)


    // <button class="buttons">Buy</button>
    let buy_button = document.createElement("button")
    buy_button.setAttribute("class", "buttons")
    buy_button.innerText = "Buy"
    buy_link.append(buy_button)
}
// Product Read ends



// Pop up starts
let overlay = document.querySelector('#overlay');
let popup = document.querySelector('.popup');
let closeBtn = document.querySelector('#close-btn');

function openPopup() {
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

closeBtn.addEventListener('click', closePopup);
            // Pop up ends
