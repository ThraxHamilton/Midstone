const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (id) {
            return fetch(`${remoteURL}/samples/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function () {
            return fetch(`${remoteURL}/samples`).then(e => e.json())
        }
    },
    edit: {
        value: function (sample, id) {
            return fetch(`${remoteURL}/samples/${id}`).then(e => e.json())
        }
    },
    post: {
        value: function (newSample) {
            return fetch(`${remoteURL}/samples`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newSample)
            }).then(e => e.json())
        }
    },
})