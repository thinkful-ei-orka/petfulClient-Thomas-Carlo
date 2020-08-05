const API_ENDPOINT = 'http://localhost:8000'

const petApiService = {
    getPets() {
        return fetch(`${API_ENDPOINT}/pets`, {
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                return res.json();
            });
    },

    getCat() {
        return fetch(`${API_ENDPOINT}/api/cat`, {
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                return res.json();
            });
    },

    removeCat() {
        return fetch(`${API_ENDPOINT}/api/cat`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({type: 'cat'})
        })
            .then(res => {
                return res.json();
            });
    },

    getDog() {
        return fetch(`${API_ENDPOINT}/api/dog`, {
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                return res.json();
            });
    },

    removeDog() {
        return fetch(`${API_ENDPOINT}/api/dog`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({type: 'dog'})
        })
            .then(res => {
                return res.json();
            });
    },

    getPeople() {
        return fetch(`${API_ENDPOINT}/people`, {
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                return res.json();
            });
    },

    removePerson() {
        return fetch(`${API_ENDPOINT}/people`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                return res.json();
            });
    },

    addPerson(person) {
        return fetch(`${API_ENDPOINT}/people`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({person})
        })
            .then(res => {
                return res.json();
            });
    },

}