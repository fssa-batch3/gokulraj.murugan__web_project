// product details
if (localStorage.getItem("product_details")) {

}
else {
    localStorage.setItem("product_details",
        JSON.stringify(
            [
                {
                    "User_id": 30,
                    "product_id": 39,
                    "crypto_name": "bitcoin",
                    "username": "gokulraj",
                    "no_of_coins": "2",
                    "money": "1234",
                    "profile_pic": "https://iili.io/H8MMJ3b.jpg"
                },
                {
                    "User_id": 30,
                    "product_id": 46,
                    "crypto_name": "tether",
                    "username": "gokulraj",
                    "no_of_coins": "2",
                    "money": "89098765678",
                    "profile_pic": "https://iili.io/H8MMJ3b.jpg"
                },
                {
                    "User_id": 30,
                    "product_id": 31,
                    "crypto_name": "dogecoin",
                    "username": "gokulraj",
                    "no_of_coins": "2",
                    "money": "21312",
                    "profile_pic": "https://iili.io/H8MMJ3b.jpg"
                },
                {
                    "User_id": 30,
                    "product_id": 9,
                    "crypto_name": "solana",
                    "username": "gokulraj",
                    "no_of_coins": "2",
                    "money": "09",
                    "profile_pic": "https://iili.io/H8MMJ3b.jpg"
                },
                {
                    "User_id": 30,
                    "product_id": 9,
                    "crypto_name": "litecoin",
                    "username": "gokulraj",
                    "no_of_coins": "2",
                    "money": "09",
                    "profile_pic": "https://iili.io/H8MMJ3b.jpg"
                },
                {
                    "User_id": 30,
                    "product_id": 51,
                    "crypto_name": "ethereum",
                    "username": "gokulraj",
                    "no_of_coins": "2",
                    "money": "00000000",
                    "profile_pic": "https://iili.io/H8MMJ3b.jpg"
                },
                {
                    "User_id": 30,
                    "product_id": 41,
                    "crypto_name": "cardano",
                    "username": "gokulraj",
                    "no_of_coins": "7987",
                    "money": "7879877",
                    "profile_pic": "https://iili.io/H8MMJ3b.jpg"
                },
                {
                    "User_id": 30,
                    "product_id": 31,
                    "crypto_name": "binance",
                    "username": "gokulraj",
                    "no_of_coins": "979",
                    "money": "989797",
                    "profile_pic": "https://iili.io/H8MMJ3b.jpg"
                },
                {
                    "user_id": 1,
                     "product_id": 90,
                    "crypto_name": "bitcoin",
                    "username": "monkeyLuffy",
                    "no_of_coins": "21",
                    "money": "21231",
                    "profile_pic": "https://iili.io/H88Y8Qf.jpg"
                }, 
                {
                    "user_id": 1,
                    "product_id": 73,
                    "crypto_name": "tether",
                    "username": "monkeyLuffy",
                    "no_of_coins": "8809",
                    "money": "0989009",
                    "profile_pic": "https://iili.io/H88Y8Qf.jpg"
                }
            ]
        ))




    // userdetails
    if (localStorage.getItem("Userdata")) {

    }
    else {
        localStorage.setItem("Userdata",
            JSON.stringify(
                [
                    {
                        "user_id": 30,
                        "Username": "gokulraj",
                        "email": "gokul@gmail.com",
                        "phone_number": "0987654321",
                        "password": "Gokul@123",
                        "confirm_password": "Gokul@123",
                        "profile_pic": "https://iili.io/H8MMJ3b.jpg"
                    },
                    {
                        "user_id": 1,
                        "Username": "monkeyLuffy",
                        "email": "luffy@gmail.com",
                        "phone_number": "0987654321",
                        "password": "Luffy@123",
                        "confirm_password": "Luffy@123",
                        "profile_pic": "https://iili.io/H88Y8Qf.jpg"
                    }
                ]
            ))
    }
}