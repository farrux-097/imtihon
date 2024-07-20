let elSignUpForm = document.querySelector(".signup-form")

elSignUpForm.addEventListener("submit", function(evt){
    evt.preventDefault()

    const data ={
        newlogin:evt.target.login.value,
        newpassword:evt.target.password.value,
    }
    evt.target[2].innerHTML = `<img src="./images/loading.svg" alt="loading" width="30" height="30" class="mx-auto" >`
   window.localStorage.setItem("isRegistered", JSON.stringify(data))
   setTimeout(() => {
    evt.target[2].innerHTML = "Register"
    location.pathname = "./index.html"
   },600)
})