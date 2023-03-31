let dbUsers = [
    {
        username : "daus",
        password : "1234",
        name : "Mohamad Firdaus",
        email : "firdausshasan28@gmail.com"
        },
        {
            username : "zik",
            password : "password",
            name : "Zikry",
            email : "zikry@gmail.com"
        }
]

function login(username, password) {
    console.log("Someone try to login with username:", username, "and password:", password)
    let matched = dbUsers.find(element =>
        element.username == username
    ) // finding element in the array
    if (matched) {
        if (matched.password == password) {
            return matched
        } else {
            return "Passwords do not match"}
    } else {
        return "Username not found"
    }
}

function register (newusername, newpassword, newemail) {
    // todo: check if username exist
    let userCheck = dbUsers.find(element =>
        element.username == newusername
    ) // check username in database
    if (userCheck){
        return "User already registered"
    } else {
        dbUsers.push({
            username: newusername,
            password: newpassword,
            email: newemail
        })
    }
    

}
//try to login
console.log(login("fakhrul", "1234"))
console.log(login("daus", "1234"))

//try to register
register("firdaus", "firdaus", "firdausssss@gmail.com")
console.log(register("fakhrul", "4321", "fakhrul@gmail.com"))