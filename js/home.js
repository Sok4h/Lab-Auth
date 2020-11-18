const database = firebase.database();
const auth = firebase.auth();
const title = document.getElementById("title");
const btnNewContact = document.getElementById("btnNewContact")
const inputContactName = document.getElementById("inputPhone")
const inputContactPhone = document.getElementById("inputPhone")
let activeUser;

auth.onAuthStateChanged(


    (user) => {

        //hay un usuario logeado
        if (user != null) {

            database.ref("Users/" + user.uid).once("value", (data) => {

                let userdb = data.val();
                activeUser=userdb;

                title.innerHTML = userdb.name;

            })
        }

        else {

            window.location.href = "register.html"

        }
    }
)
AddContact = () => {

    //verifica si algun campo está vacio
    if(inputContactPhone.value==""||inputContactName.value==""){

        alert("Please fill all blank fields");

    }
    else{

        let reference = database.ref("Contacts").push();

        let contact={

        id:reference.key,
        userId:activeUser.id,
        name:inputContactName.value,
        phone:inputContactPhone.value
        }
        reference.set(contact);

    }

}
btnNewContact.addEventListener("click", AddContact)
