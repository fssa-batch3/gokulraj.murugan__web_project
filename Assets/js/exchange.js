
// Getting the values from local Storage
const login = JSON.parse(localStorage.getItem("login"));

const user_detail = JSON.parse(localStorage.getItem("userdata"));

let user_id;
let profile_image;
let username;
let value;
let data_id;
let currency;

// check if the user email and login email are same
user_detail.find(e => {
  if (e.email == login.email) {
    value = e;
  }
})

// console.log(value)

user_id = value.user_id;
username = value.username;
profile_image = value.profile_pic;



const no_of_coins = document.getElementById("no_of_coins");
const coin_div = document.querySelectorAll(".one_coin");
const crypto = document.getElementById("crypto_name");

const money = document.getElementById("money")
  crypto.addEventListener("keyup", (e) => {

  currency = e.target.value.toLowerCase();
  let div;

  // console.log(currency)
  const one_coin = document.querySelectorAll(".one_coin");
  // console.log(one_coin)
  one_coin.forEach(element => {
    // console.log(element)
    const content = element.children[1].textContent.toLowerCase();

    if (content.includes(currency)) {
      element.style.display = "flex";
    }
    else {
      element.style.display = "none";
    }
  })
});

let data;
let coin_img;
let coin_symbol;
coin_div.forEach((el) => {
  if (el.addEventListener) {
    el.addEventListener("click", () => {
      data = el;
      crypto.value = data.children[1].innerHTML
      coin_img = data.children[0].src;
      coin_symbol = data.children[2].innerText
      console.log(coin_img);

    })
  }
  else if (crypto.value === el.children[1].innerText) {
    coin_img = el.children[0].src
    coin_symbol = data.children[2].innerText
    console.log(coin_img);
  }
})





// live time code starts
const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
const amPm = hours < 12 ? 'am' : 'pm';
// Convert from 24-hour to 12-hour format
hours %= 12;
hours = hours || 12;
// Add leading zero to minutes if necessary
minutes = minutes < 10 ? `0${minutes}` : minutes;
const currentTime = `${hours}.${minutes} ${amPm}`;
// time code ends




// Product Create starts
function product_details() {
  const product_id = Math.floor(Math.random() * 100)
  const crypto_name = document.getElementById("crypto_name").value.toLowerCase();
  const no_of_coins = document.getElementById("no_of_coins").value;
  const money = document.getElementById("money").value;

  let res;

  const product_details = JSON.parse(localStorage.getItem("product_details")) ?? [];

  const product = {
    "seller_id": user_id,
    product_id,
    crypto_name,
    "seller_username": username,
    no_of_coins,
    money,
    "profile_pic": profile_image,
    coin_img,
    "symbol": coin_symbol,
    "type" : "sell",
    "time" : currentTime,
  }

  product_details.push(product)
  localStorage.setItem("product_details", JSON.stringify(product_details))
  // localStorage.setItem("")
  window.location.href = "Exchange.html"
}
// Product Create ends


// Product Read starts
product_detail = JSON.parse(localStorage.getItem("product_details"))
// console.log(product_detail)
if (product_detail == null) {

}
else {

  for (let i = 0; i < product_detail.length; i++) {

    // <div class="onecard">
    const onecard = document.createElement("div")
    onecard.setAttribute("class", "onecard")
    const crypto_data = document.querySelectorAll(".cards");

    crypto_data.forEach((e) => {

      if (e.dataset.id == product_detail[i].crypto_name) {
        e.prepend(onecard)
      }
    })

    // <div class="profile">
    const profile = document.createElement("div")
    profile.setAttribute("class", "profile")
    onecard.append(profile)

    // <img src="../Assets/Images/profile.png" class="user_photo" alt="">
    const user_photo = document.createElement("img")
    user_photo.setAttribute("src", product_detail[i].profile_pic)
    user_photo.setAttribute("class", "user_photo")
    user_photo.setAttribute("alt", "error_found")
    profile.append(user_photo)

    // <div class="coin_details">
    const coin_details = document.createElement("div")
    coin_details.setAttribute("class", "coin_details")
    profile.append(coin_details)

    // <div class="coin_details2">
    const coin_details2 = document.createElement("div")
    coin_details2.setAttribute("class", "coin_details2")
    coin_details.append(coin_details2)

    // <img src="../Assets/Images/Logo/btc.png" width="12%" alt="" class="crypto_image">
    const crypto_image = document.createElement("img")
    crypto_image.setAttribute("src", product_detail[i].coin_img)
    crypto_image.setAttribute("class", "crypto_image")
    crypto_image.setAttribute("alt", "error_found")
    crypto_image.setAttribute("width", "12")
    coin_details2.append(crypto_image)

    //  <h4 class="crypto_name2">Bitcoin</h4>
    const cryoto_name2 = document.createElement("h4")
    cryoto_name2.setAttribute("class", "cryoto_name2")
    cryoto_name2.innerText = product_detail[i].crypto_name
    coin_details2.append(cryoto_name2)

    // <h4 class="username">Username</h4>
    const username = document.createElement("h4")
    username.setAttribute("class", "username")
    username.innerText = product_detail[i].seller_username
    coin_details.append(username)

    // <div class="exchange">
    const exchange = document.createElement("div")
    exchange.setAttribute("class", "exchange")
    onecard.append(exchange)

    const label = document.createElement("label")
    label.setAttribute("id", "label1")
    label.setAttribute("for", "crypto");
    label.setAttribute("disabled", "");
    label.innerText = product_detail[i].symbol
    exchange.append(label)

    // <input type="number" name="crypto" id="crypto" disabled>
    const crypto = document.createElement("input")
    crypto.setAttribute("type", "number")
    crypto.setAttribute("name", "crypto")
    crypto.setAttribute("id", "crypto")
    crypto.setAttribute("disabled", "")
    crypto.setAttribute("value", product_detail[i].no_of_coins)
    exchange.append(crypto)

    // <br>
    const space = document.createElement("br")
    exchange.append(space)

    const label2 = document.createElement("label")
    label2.setAttribute("for", "crypto");
    label2.setAttribute("disabled", "");
    label2.innerText = "INR"
    exchange.append(label2)

    // <input type="number" name="price" id="price" disabled>
    const price = document.createElement("input")
    price.setAttribute("type", "number")
    price.setAttribute("name", "price")
    price.setAttribute("id", "price")
    price.setAttribute("disabled", "")
    price.value = product_detail[i].money;
    exchange.append(price)

    // <br>
    const space2 = document.createElement("br")
    exchange.append(space2)

    if (login.user_id == product_detail[i].seller_id) {
    }
    else {
      // <button class="buttons">Buy</button>
      const buy_button = document.createElement("button")
      buy_button.setAttribute("class", "buttons2")
      buy_button.setAttribute("value", product_detail[i].product_id)
      buy_button.innerText = "Buy"
      exchange.append(buy_button);

    }
  }
}
// Product Read ends

// Pop up starts
const sell_button = document.getElementById("sell_button")
const overlay = document.querySelector('#overlay');
const popup = document.querySelector('.popup');
const closebtn = document.getElementById('close-btn');

const save = document.getElementById("save")

function openPopup() {
  popup.style.display = 'block';
  overlay.style.display = 'block';
}

function closePopup() {
  popup.style.display = 'none';
  overlay.style.display = 'none';
}

closebtn.addEventListener("click", closePopup);
sell_button.addEventListener("click", openPopup);
// Pop up ends



// payment details create

const payment_id = document.querySelectorAll(".buttons2")
let product_Id;
let res;


// card balance code starts
let card_balance = JSON.parse(localStorage.getItem("card_balance")) ?? []
let seller_id;
let coin_arr = [];
let crypto_detail;
let coins;
let username22;
let curr_index;
let cryto_coinss;
let ifnotobject;
let coin_i;

payment_id.forEach((data) => {
  console.log(data)
  data.addEventListener("click", () => {
    
    product_Id = data.value;

    coin_i = data.parentElement.parentElement.children[0].children[1].children[0].children[0].src;

    cryto_coinss = Number(data.parentElement.children[1].value);

    username22 = data.parentElement.parentElement.children[0].children[1].children[1].innerText;

    data_id = data.parentElement.parentElement.parentElement.dataset.id;

    product_detail.find((element) => {
      if (product_Id == element.product_id) {

        seller_id = element.seller_id

        res = element

        alert("are you sure you want to buy??")

        payment_detail()

      }
    })

    cardbalanace()
  })
});

function payment_detail() {

  const payment = JSON.parse(localStorage.getItem("payment_details")) ?? [];
  const order_id = Math.floor(Math.random() * 100);
  // console.log(res)

  const payment_details = {

    "user_id": login.user_id,
    "profile_pic": res.profile_pic,
    "order_id": order_id,
    "seller_id": seller_id,
    "product_id": product_Id,
    "crypto_name": res.crypto_name,
    "no_of_coins": res.no_of_coins,
    "money": res.money,
    "seller_username": res.seller_username,
    "time": currentTime,
    "type": "Buy",
  }

  payment.push(payment_details)
  localStorage.setItem("payment_details", JSON.stringify(payment));
  window.location.href = "./selectpayment.html"

}

let get_index;
function cardbalanace() {

  if (localStorage.getItem("card_balance")) {

    let card_balance1 = JSON.parse(localStorage.getItem("card_balance"))

    card_balance1.find((balance) => {

      if (balance["user_id"] === login["user_id"]) {

        balance["coin_details"].find((e) => {
          if (data_id == e["coin_name"]) {

            return get_index = e

          }
        })



        if (get_index) {
          get_index["coins"] = Number(get_index["coins"]) + Number(cryto_coinss)

          localStorage.setItem("card_balance", JSON.stringify(card_balance1))
        }

        else {
          console.log(coin_img)

          ifnotobject = {
            "coin_name": data_id,
            "coins": cryto_coinss,
            "coin_image": coin_i,
          }
          balance["coin_details"].push(ifnotobject)
          localStorage.setItem("card_balance", JSON.stringify(card_balance1))
        }


      }
      else {
        console.log("front")

        crypto_detail = data_id;

        let coin_obj = {
          "coin_name": crypto_detail,
          "coins": cryto_coinss,
          "coin_image": coin_i,
        }

        coin_arr.push(coin_obj)

        let card = {
          "coin_details": coin_arr,
          "username": username,
          "user_id": login["user_id"],
        }

        // console.log(card)

        card_balance.push(card)

        localStorage.setItem("card_balance", JSON.stringify(card_balance));



      }
    })

  }

  else {

    card_balance = []
    crypto_detail = data_id;

    let coin_obj = {
      "coin_name": crypto_detail,
      "coins": cryto_coinss,
      "coin_image": coin_i,
    }

    coin_arr.push(coin_obj)

    let card = {
      "coin_details": coin_arr,
      "username": username,
      "user_id": login["user_id"],
    }

    // console.log(card)

    card_balance.push(card)

    localStorage.setItem("card_balance", JSON.stringify(card_balance));

  }
}



let cardss = JSON.parse(localStorage.getItem("card_balance")) ??[]

let verify = document.getElementById("crypto_name")
let verify_coins = document.getElementById("no_of_coins");
let det;


let detttt;
let coin_ver;

const check = document.getElementById("form");
check.addEventListener("submit", e => {
  e.preventDefault()

  cardss.forEach((details) => {
    if (details.user_id == login.user_id) {
      det = details.coin_details;
    }
  })


  det.find((data) => {
    // console.log (data);
    // console.log(verify.value)
    if (data.coin_name == verify.value.toLowerCase() ) {
       detttt = data.coin_name

      if(data.coins >=  verify_coins.value){
        coin_ver = data.coins
      }
    }
  })
  console.log(detttt)
  console.log(coin_ver)

  if (detttt == verify.value.toLowerCase()  &&  coin_ver  >=  verify_coins.value) {
    product_details()
  }
  else if( detttt == verify.value.toLowerCase()){
    alert("You dont have enough coins to sell")
  }
  else {
    alert("You Don't This coin")
  }

})