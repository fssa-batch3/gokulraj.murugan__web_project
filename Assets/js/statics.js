// fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR")
// .then(response => (response.json()))
// .then(e =>{
//     // let supply = e.coins[0].availableSupply
//     // let id = e.coins[0].id
//     // let exp = e.coins[0].exp
//     // let icon = e.coins[0].icon
//     // let name = e.coins[0].name
//     // let price = e.coins[0].price
//     // let priceBtc = e.coins[0].priceBtc
//     // let priceChangeId = e.coins[0].priceChange1d
//     // let rank = e.coins[0].rank
//     // let symbol = e.coins[0].symbol
//     // let totalSupply = e.coins[0].totalSupply
//     // let twitterUrl= e.coins[0].twitterUrl
//     // let volume= e.coins[0].volume
//     // let websiteUrl= e.coins[0].websiteUrl
//     // document.getElementById("supply").innerText = supply
//     // document.getElementById("id").innerText = id
//     // document.getElementById("exp").innerText = exp
//     // document.getElementById("icon").innerText = icon
//     // document.getElementById("name").innerText = name
//     // document.getElementById("price").innerText = price
//     // document.getElementById("priceBtc").innerText = priceBtc
//     // document.getElementById("priceChangeId").innerText = priceChangeId
//     // document.getElementById("rank").innerText = rank
//     // document.getElementById("symbol").innerText = symbol
//     // document.getElementById("totalSupply").innerText = totalSupply
//     // document.getElementById("twitterUrl").innerText = twitterUrl
//     // document.getElementById("volume").innerText = volume
//     // document.getElementById("websiteUrl").innerText = websiteUrl
//     console.log(e["coins"][0]);

// })

getCrypto("INR", "BTC");

function getCrypto(currency, coin) {
  // var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  const xhrrequest = new XMLHttpRequest();

  xhrrequest.onload = function () {
    const resJSON = JSON.parse(xhrrequest.response);
    console.log(resJSON);
  };
  xhrrequest.open(
    "get",
    `https://coinlib.io/api/v1/coin?key=0f699c336c04344a&pref=EUR&symbol=BTC`,
    true
  );
  xhrrequest.send();
}

// fetch(`https://coinlib.io/api/v1/coin?key=0f699c336c04344a&pref=${currency}&symbol=${coin}`)
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
//     // console.log(data["markets"][0]["exchanges"])
// })
// }
