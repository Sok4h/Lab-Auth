const database = firebase.database();
const auth = firebase.auth();
const title = document.getElementById("title");
const btnNewContact = document.getElementById("btnNewContact")
const inputContactName = document.getElementById("inputName")
const inputContactPhone = document.getElementById("inputPhone")
const containerContacts = document.getElementById("containerContacts")

let activeUser;

auth.onAuthStateChanged(


    (user) => {

        //hay un usuario logeado
        if (user != null) {

            database.ref("Users/" + user.uid).once("value", (data) => {

                let userdb = data.val();
                activeUser = userdb;

                title.innerHTML = userdb.name;

                LoadContacts()

            })
        }

        else {

            window.location.href = "register.html"

        }
    }
)

LoadContacts = () => {

    database.ref("Contacts").orderByChild("userId").equalTo(activeUser.id).on("value",(data)=>{

        containerContacts.innerHTML=""

        data.forEach(
            
            contact=>{

                let info= contact.val();
                let tempContact = new Contact(info)
                containerContacts.appendChild(tempContact.Render())

            }
        )

    })


}
AddContact = () => {

    //verifica si algun campo está vacio
    if (inputContactPhone.value == "" || inputContactName.value == "") {

        alert("Please fill all blank fields");

    }
    else {

        let reference = database.ref("Contacts").push();

        let contact = {

            id: reference.key,
            userId: activeUser.id,
            name: inputContactName.value,
            phone: inputContactPhone.value
        }

        inputContactName.val=""
        inputContactPhone.val=""
        reference.set(contact);

    }

}
btnNewContact.addEventListener("click", AddContact)
