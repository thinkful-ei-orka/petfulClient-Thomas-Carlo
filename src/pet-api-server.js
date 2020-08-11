const API_ENDPOINT = 'https://calm-dawn-58724.herokuapp.com/'

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
        return fetch(`${API_ENDPOINT}/pets`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({type: 'cat'})
        })
            .then(res => {
                if(!res.ok) {
                    throw new Error(res.status)
                }
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
        return fetch(`${API_ENDPOINT}/pets`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({type: 'dog'})
        })
            .then(res => {
                if(!res.ok) {
                    throw new Error(res.status)
                }
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
                if(!res.ok) {
                    throw new Error(res.status)
                }
            });
    },

    addPerson(person) {
        return fetch(`${API_ENDPOINT}/people`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(person)
        })
            .then(res => {
                return res.json();
            });
    },

}

export default petApiService;