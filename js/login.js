const auth = firebase.auth()
const inputEmail=document.getElementById("inputEmail")
const inputPassword=document.getElementById("inputPassword")
const btnLogin=document.getElementById("btnLogin")
const btnRegister=document.getElementById("btnRegister")


auth.onAuthStateChanged(


    (user) => {

        //hay un usuario logeado
        if (user != null) {

            window.location.href="home.html"
           
        }

        
    }
)


btnLogin.addEventListener("click",()=>{

    auth.signInWithEmailAndPassword(inputEmail.value,inputPassword.value).then(
        ()=>{

            window.location.href="home.html"
        }
    ).cath(
        
        (error)=>{

            console.log(error)
        }
        
        )

})

btnRegister.addEventListener("click",()=>{

    window.location.href="register.html"
})