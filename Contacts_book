// Give the user the option to select a sort action from the list. Then, the user specifies to sort by name, phone, or email.

let contacts = [{

    name: "Maxwell Wright",

    phone: "(0191) 719 6495",

    email: "Curabitur.egestas.nunc@nonummyac.co.uk"

}, {

    name: "Raja Villarreal",

    phone: "0866 398 2895",

    email: "posuere.vulputate@sed.com"

}, {

    name: "Helen Richards",

    phone: "0800 1111",

    email: "libero@convallis.edu"

}];

function showContact(contacts_list, index){

    if(!(contacts_list instanceof Array)){

        console.log("Not an array!");

        return 1;

    } else if(!contacts_list[index]){

        console.log("Invalid index!");

        return 1;

    } else {

        console.log(`Name: ${contacts[index].name}\nPhone: ${contacts[index].phone}\nEmail: ${contacts[index].email}`);

    }

}

function AllContacts(contacts_list){

    if(!(contacts_list instanceof Array)){

        console.log("Not an array!");

        return 1;

    } else {

        for(let crt_contact of contacts){

            console.log(`Name: ${crt_contact.name}\nPhone: ${crt_contact.phone}\nEmail: ${crt_contact.email}`);

        }

    }

}

function addNewContact(contacts_list, new_name, new_phone, new_email){

    if(!(contacts_list instanceof Array)){

        console.log("Not an array!");

        return 1;

    } else if(!new_name || !new_phone || !new_email){

        console.log("Incorrect data!");

        return 1;

    } else {

        contacts_list.push({

            name: new_name,

            phone: new_phone,

            email: new_email

        });

    }

}

function sortContact_by(contacts_list, sort_by_field){

    let last_i = contacts_list.length - 1;

    do{

        sorted = true;

        for(let i=0; i < last_i; i++){

            if(contacts_list[i][sort_by_field] > contacts_list[i+1][sort_by_field]){

                sorted = false;

                let aux = contacts_list[i];

                contacts_list[i] = contacts_list[i+1];

                contacts_list[i+1] = aux;

            }

        }

    } while(!sorted);

}

showContact(contacts, 0);

showContact(contacts, 9);

addNewContact(contacts, "Ana", "567", "ujj");

addNewContact(contacts, "", "567", "ujj");

addNewContact(contacts, "Ana", "", "ujj");

addNewContact(contacts, "Ana", "567", "");

AllContacts(contacts);

sortContact_by(contacts, "name");

AllContacts(contacts);





