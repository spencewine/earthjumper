



async signup(email, pass) {

    try {
        await firebase.auth()
            .createUserWithEmailAndPassword(email, pass);

        console.log("Account created");

        // Navigate to the Home page, the user is auto logged in

    } catch (error) {
        console.log(error.toString())
    }

}
