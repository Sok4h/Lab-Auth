class Contact{

    constructor(contact){

        this.contact=contact;
    }

    Render=()=>{

        let container = document.createElement("div");
        container.className="containerContact"
        let name = document.createElement("p")
        name.innerHTML=this.contact.name
        let phone = document.createElement("p")
        phone.innerHTML=this.contact.phoneNumber
        let btnDelete=document.createElement("button")
        btnDelete.innerHTML="Delete"
        container.appendChild(name);
        container.appendChild(phone);
        container.appendChild(btnDelete);
        btnDelete.addEventListener("click",()=>{

            let database = firebase.database();
            database.ref("Contacts/"+this.contact.id).set(null);
        })

        return container;

    }
}