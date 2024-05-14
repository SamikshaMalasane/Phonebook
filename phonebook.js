let phoneBook = {
    contacts:{},

    add(name,phoneNumber,email) {
        if (this.contacts[name]) {
            console.log(`Contact ${name} already exists.`);
        } else {
            this.contacts[name] = { name, phoneNumber, email };
            console.log(`Contact ${name} added successfully.`);
        }
    },


    search(name) {
        let contact = this.contacts[name];
        if (contact) {
            console.log(`Name: ${name}, Phone Number: ${contact.phoneNumber}, Email: ${contact.email}`);
        } else {
            console.log(`Contact ${name} not found.`);
        }
    },

    update(name, phoneNumber, email) {
        if (this.contacts[name]) {
            this.contacts[name].phoneNumber = phoneNumber;
            this.contacts[name].email = email;
            console.log(`Contact ${name} updated successfully.`);
        } else {
            console.log(`Contact ${name} not found.`);
        }
    },

    delete(name) {
        if (this.contacts[name]) {
            delete this.contacts[name];
            console.log(`Contact ${name} deleted successfully.`);
        } else {
            console.log(`Contact ${name} not found.`);
        }
    }
};

phoneBook.add("samiksha", "9073663727", "samiksha@gmail.com");
//phoneBook.add("pratiksha", "234567133", "ha@gmail.com");
phoneBook.search("samiksha");
phoneBook.update("samiksha", "8308349546", "samiksha22@gmail.com");
phoneBook.search("samiksha");
phoneBook.delete("samiksha");
phoneBook.search("samiksha");
