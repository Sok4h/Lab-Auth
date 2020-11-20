const database=firebase.database();
const auth = firebase.auth();
const inputName = document.getElementById("inputName")
const inputPhone = document.getElementById("inputPhone")
const inputEmail = document.getElementById("inputEmail")
const inputPassword = document.getElementById("inputPassword")
const inputPassword2 = document.getElementById("inputPassword2")
const btnRegister= document.getElementById("btnRegister")
const btnLogin=document.getElementById("btnLogin")


  Register =()=>{

    //no hay campos vacios
    if(!(inputName.value==""||inputPhone.value==""||inputEmail.value==""|| inputPassword.value==""||inputPassword2.value=="")){

        // las contraseñas coinciden

        if(inputPassword.value===inputPassword2.value){

            auth.createUserWithEmailAndPassword(inputEmail.value,inputPassword.value).then(

            (data)=>{

                let user={ 

                id: data.user.uid,
                name: inputName.value,
                email:inputEmail.value,
                phone:inputPhone.value,
                password:inputPassword

                }
                
                database.ref("Users/"+user.id).set(user).then(
                    ()=>{

                        window.location.href="home.html"


                    }
                )
               
            }
            )

        }

        else{

            alert("The password doesnt match")
        }

    }

    else{


        alert("Please fill all the blank fields")
    }
}



btnRegister.addEventListener("click",Register);
btnLogin.addEventListener("click",()=>{

    window.location.href="login.html"

})


