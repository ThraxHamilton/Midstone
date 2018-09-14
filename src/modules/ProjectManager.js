const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (id) {
            return fetch(`${remoteURL}/projects/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function () {
            return fetch(`${remoteURL}/projects`).then(e => e.json())
        }
    },
    post: {
        value: function (newProject) { 
            // console.log((`${remoteURL}/projects/${id}`))
            return fetch(`${remoteURL}/projects`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProject)
            }).then(e => e.json())
        }
    },
    edit: {
        value: function (newProject, id) { 
            // console.log((`${remoteURL}/samples/${id}`))
            return fetch(`${remoteURL}/projects/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProject)
            }).then(e => e.json())
        }
    },
})