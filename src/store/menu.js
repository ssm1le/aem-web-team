export default {
    state: {
        menu: [
            { icon: "mdi-home", text: "Homeage", link: "/" },
            { icon: "mdi-file-document", text: "Documentation", link: "" },
            { icon: "mdi-content-copy", text: "Duplicates", link: "" },
            {
                icon: "mdi-chevron-up",
                "icon-alt": "mdi-chevron-down",
                text: "Projects",
                model: false,
                children: [
                    {
                        icon: "mdi-note-outline mdi-18px",
                        text: "Tisma",
                        link: "/projects#tisma"
                    },
                    {
                        icon: "mdi-note-outline mdi-18px",
                        text: "BiogenPro",
                        link: "/projects#biogenpro"
                    },
                    {
                        icon: "mdi-note-outline mdi-18px",
                        text: "NeuroExpert",
                        link: "/projects#neuroexpert"
                    },
                    {
                        icon: "mdi-note-outline mdi-18px",
                        text: "project",
                        link: "/projects#project"
                    },
                    {
                        icon: "mdi-note-outline mdi-18px",
                        text: "project",
                        link: "/projects#project"
                    },
                    {
                        icon: "mdi-note-outline mdi-18px",
                        text: "project",
                        link: "/projects#project"
                    },
                    {
                        icon: "mdi-note-outline mdi-18px",
                        text: "project",
                        link: "/projects#project"
                    },
                    {
                        icon: "mdi-note-outline mdi-18px",
                        text: "project",
                        link: "/projects#project"
                    },
                    {
                        icon: "mdi-note-outline mdi-18px",
                        text: "project",
                        link: "/projects#project"
                    },
                    {
                        icon: "mdi-note-outline mdi-18px",
                        text: "project",
                        link: "/projects#project"
                    },
                    {
                        icon: "mdi-note-outline mdi-18px",
                        text: "project",
                        link: "/projects#project"
                    },
                    {
                        icon: "mdi-note-outline mdi-18px",
                        text: "project",
                        link: "/projects#project"
                    },
                    { icon: "mdi-plus", text: "New project" }
                ]
            },
            {
                icon: "mdi-chevron-up",
                "icon-alt": "mdi-chevron-down",
                text: "Tools",
                model: false,
                children: [
                    { text: "CP-author", href: "https://cp-author.biogen-support.com/" },
                    {
                        text: "BCP-author",
                        href: "https://bcp-author.biogen-support.com/"
                    },
                    {
                        text: "CP crx/de",
                        href: "https://cp-author.biogen-support.com/crx/de/index.jsp#"
                    },
                    {
                        text: "BCP crx/de",
                        href: "https://bcp-author.biogen-support.com/crx/de/index.jsp#"
                    }
                ]
            },
            { icon: "mdi-settings", text: "Settings" },
            { icon: "mdi-message", text: "Send feedback" },
            { icon: "mdi-help-circle", text: "Help" },
        ]
    },
    actions: {
        newMenuItem({ commit }, payload) {
            commit('newMenuItem', payload)
        }
    },
    mutations: {
        newMenuItem(state, payload) {
            console.log(state, payload);
        }
    },
    getters: {
        menuItems(state) {
            return state.menu;
        }
    }
}