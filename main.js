

    // userdetails
    if (localStorage.getItem("userdata")) {

    }
    else {
        localStorage.setItem("userdata",
            JSON.stringify(
                [
                    {
                        "user_id": 30,
                        "username": "gokulraj",
                        "email": "gokul@gmail.com",
                        "phone_number": "0987654321",
                        "password": "Gokul@123",
                        "confirm_password": "Gokul@123",
                        "profile_pic": "https://iili.io/H8MMJ3b.jpg"
                    },
                    {
                        "user_id": 1,
                        "username": "monkeyLuffy",
                        "email": "luffy@gmail.com",
                        "phone_number": "0987654321",
                        "password": "Luffy@123",
                        "confirm_password": "Luffy@123",
                        "profile_pic": "https://iili.io/H88Y8Qf.jpg"
                    }
                ]
            ))
    }
