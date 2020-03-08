export default {
    state: {
        notes: [
            {
                date: "14.03.2020",
                link: "path to file",
                author: "Nadya",
                deployed: false
            },
            {
                date: "15.03.2020",
                link: "path to file",
                author: "Nadya",
                deployed: false
            },
            {
                date: "16.03.2020",
                link: "path to file",
                author: "Radik",
                deployed: false
            }
        ]
    },
    actions: {
        newNote({ commit }, payload) {
            commit('newNote', payload)
        }
    },
    mutations: {
        newNote(state, payload) {
            state.notes.unshift(payload);
        }
    },
    getters: {
        allNotes(state) {
            return state.notes;
        },
        notDeployed(state) {
            return state.notes.filter(note => !note.deployed);
        },
    }
};