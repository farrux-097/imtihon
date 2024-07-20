let elLoginForm = document.querySelector(".login-form")

elLoginForm.addEventListener("submit", function(evt){
    evt.preventDefault()

    const data ={
        login:evt.target.login.value,
        password:evt.target.password.value
    }
    evt.target.reset()
    const isRegistered = JSON.parse (window.localStorage.getItem("isRegistered"))
    if(isRegistered){
        evt.target[2].innerHTML = `<img src="./images/loading.svg" alt="loading" width="30" height="30" class="mx-auto">`
        if(data.login.trim().toLowerCase() == isRegistered.newlogin.toLowerCase() && data.password.trim().toLowerCase() == isRegistered.newpassword.toLowerCase()){
            window.localStorage.setItem("LoginidUser", JSON.stringify(data))
            setTimeout(() => {
                evt.target[2].innerHTML = "Login"
                location.pathname = "./student.html"
               },800)
        }
        else{
            alert("Login yoki Password xato qaytadan urining")
        }
    }
    else{
        evt.target[2].innerHTML = `<img src="./images/loading.svg" alt="loading" width="30" height="30" class="mx-auto">`
        if(data.login.trim().toLowerCase() == "farrux" && data.password.trim().toLowerCase() == "97"){
            window.localStorage.setItem("LoginidUser", JSON.stringify(data))
            setTimeout(() => {
                evt.target[2].innerHTML = "Login"
                location.pathname = "./student.html"
               },800)
        }
        else{
            alert("Login yoki Password xato qaytadan urining")
        }
    }
})