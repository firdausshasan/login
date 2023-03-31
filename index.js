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
    console.log("someone try to login with", username, password)
    let matched = dbUsers.find(element => 
        element.username == username
    )
    if(matched) {
        if(matched.password == password){
            return matched
        }else{
            return "password not matched"
        }
    }else{
            return "username not matched"
        }
        console.log(matched)
}
    


//try to login
console.log(login("daus","password"))
//console.log(login("zik","password"))