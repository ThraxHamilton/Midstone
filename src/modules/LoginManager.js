const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (id, link) {
            return fetch(`${remoteURL}/${link}/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function (link) {
            return fetch(`${remoteURL}/${link}`).then(e => e.json())
        }
    },
    post: {
        value: function (newItem, link) {
            return fetch(`${remoteURL}/${link}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newItem)
            })
                .then(e => e.json())
                .then(() => this.getAll(link))
        }
    },
    findUser: {
        value: (email, username, password) => {
            return fetch(`http://localhost:5002/users?inputEmail=${email}&inputPassword=${password}inputUsername=${username}`)
                .then(response => response.json())
        }
    }
})