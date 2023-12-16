class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
        this.article = document.createElement('article');
        this.article.innerHTML =
            `<div class="title ${this._online ? 'online' : ''}">${this.firstName} ${this.lastName}<button>&#8505;</button></div>
            <div class="info" style="display:none">
                <span>\u260E ${this.phone}</span>
                <span>&#9993; ${this.email}</span>
            </div>`
    }

    render(id) {
        document.querySelector(`#${id}`).appendChild(this.article);

        this.article.querySelector('button').addEventListener('click', () => {
            let style = this.article.querySelector('.info').getAttribute('style');
            if (style === 'display:none') {
                this.article.querySelector('.info').removeAttribute('style')
            } else {
                this.article.querySelector('.info').setAttribute('style', 'display:none')
            }
        })
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
        this.updateOnlineStatusInHTML();
    }

    updateOnlineStatusInHTML() {
        const title = this.article.querySelector('.title');
        if (this._online) {
            title.classList.add('online');
        } else {
            title.classList.remove('online');
        }
    }
}


let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);

