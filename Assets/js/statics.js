// var baseUrl = "https://api.coinranking.com/v2/coins";
// var proxyUrl = "https://cors-anywhere.herokuapp.com/";
// var apiKey = "coinranking74cbcab339ff3200d1280678d0ddda59d88e4e7b2d58b268";

// var apiUrl = `${proxyUrl}${baseUrl}`;
// console.log(apiUrl);

// fetch(`${proxyUrl}${baseUrl}`, { 
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'X-My-Custom-Header': `${apiKey}`,
//       'Access-Control-Allow-Origin': "*"
//     }
// })
//   .then((response) => {
//     if (response.ok) {
//       response.json().then((json) => {
//         console.log(data);
//         // let coinsData = json.data.coins;

//         // if (coinsData.length > 0) {
//         //   var cryptoCoin = "";
//         // }

//         //For Loop Starts
//         // coinsData.forEach((coin) => {
//         //   cryptoCoin += "<tr>";
//         //   cryptoCoin += `<td> ${coin.uuid} </td>`;
//         //   cryptoCoin += `<td> ${coin.btcPrice} </td>`;
//         //   cryptoCoin += `<td> ${coin.rank}</td>`;
//         //   cryptoCoin += `<td> ${coin.tier} </td>`;
//         //   cryptoCoin += `<td> ${coin.name}</td>`;
//         //   cryptoCoin += `<td> $${Math.round(coin.price)} Billion</td>`;
//         //   cryptoCoin += `<td> ${coin.symbol}</td>`;"<tr>";
//         // });
//         // //For Loop Ends
//         // document.getElementById("data").innerHTML = cryptoCoin;
//       });
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });


fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR")
.then(response => (response.json()))
.then(e =>{
    // let supply = e.coins[0].availableSupply
    // let id = e.coins[0].id
    // let exp = e.coins[0].exp
    // let icon = e.coins[0].icon
    // let name = e.coins[0].name
    // let price = e.coins[0].price
    // let priceBtc = e.coins[0].priceBtc
    // let priceChangeId = e.coins[0].priceChange1d
    // let rank = e.coins[0].rank
    // let symbol = e.coins[0].symbol
    // let totalSupply = e.coins[0].totalSupply
    // let twitterUrl= e.coins[0].twitterUrl
    // let volume= e.coins[0].volume
    // let websiteUrl= e.coins[0].websiteUrl
    // document.getElementById("supply").innerText = supply
    // document.getElementById("id").innerText = id
    // document.getElementById("exp").innerText = exp
    // document.getElementById("icon").innerText = icon
    // document.getElementById("name").innerText = name
    // document.getElementById("price").innerText = price
    // document.getElementById("priceBtc").innerText = priceBtc
    // document.getElementById("priceChangeId").innerText = priceChangeId
    // document.getElementById("rank").innerText = rank
    // document.getElementById("symbol").innerText = symbol
    // document.getElementById("totalSupply").innerText = totalSupply
    // document.getElementById("twitterUrl").innerText = twitterUrl
    // document.getElementById("volume").innerText = volume
    // document.getElementById("websiteUrl").innerText = websiteUrl
    console.log(e["coins"][0]);
})