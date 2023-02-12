class User {
    #id;
    #name;
    #username;
    #address;
    #phone;
    #website;
    #company;
    #email;


    constructor(id, name, username, phone, email) {
        this.#id = id;
        this.#name = name;
        this.#username = username;
        this.#phone = phone;
        this.#email = email;

        this.#address={};
        this.#company={};
        this.#website=' ';
    }

    get address() {
        return this.#address;
    }

    set address(value) {
        this.#address = value;
    }

    get website() {
        return this.#website;
    }

    set website(value) {
        this.#website = value;
    }

    get company() {
        return this.#company;
    }

    set company(value) {
        this.#company = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }
}
