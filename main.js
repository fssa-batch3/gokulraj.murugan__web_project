// userdetails
if (localStorage.getItem("userdata")) {
} else {
  localStorage.setItem(
    "userdata",
    JSON.stringify([
      {
        user_id: 30,
        username: "gokulraj",
        email: "gokul@gmail.com",
        phone_number: "0987654321",
        password: "Gokul@123",
        confirm_password: "Gokul@123",
        profile_pic: "https://iili.io/H8MMJ3b.jpg",
      },
      {
        user_id: 1,
        username: "monkeyLuffy",
        email: "luffy@gmail.com",
        phone_number: "0987654321",
        password: "Luffy@123",
        confirm_password: "Luffy@123",
        profile_pic: "https://iili.io/H88Y8Qf.jpg",
      },
    ])
  );
}





// Product Details

if (localStorage.getItem("product_details")) {
}
else {
  localStorage.setItem("product_details",
    [
      {
        "seller_id": 30, "product_id": 57, "crypto_name": "bitcoin", "seller_username": "gokulraj", "no_of_coins": "2", "money": "2", "profile_pic": "https://iili.io/H8MMJ3b.jpg", "coin_img": "http://127.0.0.1:5500/Assets/Images/Logo/btc.png", "symbol": "BTC"
      },
      {
        "seller_id": 30, "product_id": 77, "crypto_name": "tether", "seller_username": "gokulraj", "no_of_coins": "2", "money": "2", "profile_pic": "https://iili.io/H8MMJ3b.jpg", "coin_img": "http://127.0.0.1:5500/Assets/Images/Logo/usdt.png", "symbol": "USDT"
      },
      {
        "seller_id": 30, "product_id": 65, "crypto_name": "ethereum", "seller_username": "gokulraj", "no_of_coins": "2", "money": "2", "profile_pic": "https://iili.io/H8MMJ3b.jpg", "coin_img": "http://127.0.0.1:5500/Assets/Images/Logo/eth.png", "symbol": "ETH"
      },
      {
        "seller_id": 30, "product_id": 12, "crypto_name": "binace", "seller_username": "gokulraj", "no_of_coins": "2", "money": "2", "profile_pic": "https://iili.io/H8MMJ3b.jpg", "coin_img": "http://127.0.0.1:5500/Assets/Images/Logo/bnb.png", "symbol": "BNB"
      },
      {
        "seller_id": 30, "product_id": 80, "crypto_name": "usd coin", "seller_username": "gokulraj", "no_of_coins": "2", "money": "2", "profile_pic": "https://iili.io/H8MMJ3b.jpg", "coin_img": "http://127.0.0.1:5500/Assets/Images/Logo/usd.png", "symbol": "USD"
      },
      {
        "seller_id": 30, "product_id": 75, "crypto_name": "doge coin", "seller_username": "gokulraj", "no_of_coins": "2", "money": "2", "profile_pic": "https://iili.io/H8MMJ3b.jpg", "coin_img": "http://127.0.0.1:5500/Assets/Images/Logo/doge.png", "symbol": "DOGE"
      },
      {
        "seller_id": 30, "product_id": 17, "crypto_name": "solana", "seller_username": "gokulraj", "no_of_coins": "2", "money": "2", "profile_pic": "https://iili.io/H8MMJ3b.jpg", "coin_img": "http://127.0.0.1:5500/Assets/Images/Logo/sol.png", "symbol": "SOL"
      },
      {
        "seller_id": 30, "product_id": 71, "crypto_name": "litecoin", "seller_username": "gokulraj", "no_of_coins": "2", "money": "3", "profile_pic": "https://iili.io/H8MMJ3b.jpg", "coin_img": "http://127.0.0.1:5500/Assets/Images/Logo/ltc.png", "symbol": "LTC"
      },
      {
        "seller_id": 30, "product_id": 28, "crypto_name": "cardano", "seller_username": "gokulraj", "no_of_coins": "2", "money": "2", "profile_pic": "https://iili.io/H8MMJ3b.jpg", "coin_img": "http://127.0.0.1:5500/Assets/Images/Logo/ada.png", "symbol": "ADA"
      }])
}


