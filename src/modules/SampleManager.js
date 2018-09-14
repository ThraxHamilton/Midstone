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
    post: {
        value: function (newSample) { 
            // console.log((`${remoteURL}/samples/${id}`))
            return fetch(`${remoteURL}/samples`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newSample)
            }).then(e => e.json())
        }
    },
    edit: {
        value: function (newSample, id) { 
            console.log((`${remoteURL}/samples/${id}`))
            return fetch(`${remoteURL}/samples/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newSample)
            }).then(e => e.json())
        }
    },
})