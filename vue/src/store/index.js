import axios from "axios";
import { createStore } from "vuex";
import axiosClient from "../axios";


const serveys = [
    {
        id: 100,
        title: "This is Title",
        slug: 'this-is-title',
        status: 'draft',
        image: "https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.png",
        description: "this is description of map.......blah blah",
        created_at: '2021-12-20 18:00:00',
        updated_at: '2021-12-20 18:00:00',
        expire_date: '2021-12-20 18:00:00',
        questions: [],
    },
    {
        id: 99,
        title: "This is second Title",
        slug: 'this-is-second-title',
        status: 'draft',
        image: "https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.png",
        description: "this is second description of map.......blah blah",
        created_at: '2021-12-20 18:00:00',
        updated_at: '2021-12-20 18:00:00',
        expire_date: '2021-12-20 18:00:00',
        questions: [{
            id: 1,
            type: 'select',
            question: 'What are you doing?',
            description: null,
            data: {
                options: [
                    { uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'USA' },
                    { uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'India' },
                    { uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'Japan' },
                    { uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'China' },
                ]
            }
        }],
    },{
        id: 98,
        title: "This is Title",
        slug: 'this-is-title',
        status: 'draft',
        image: "https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.png",
        description: "this is description of map.......blah blah",
        created_at: '2021-12-20 18:00:00',
        updated_at: '2021-12-20 18:00:00',
        expire_date: '2021-12-20 18:00:00',
        questions: [],
    },
    {
        id: 97,
        title: "This is second Title",
        slug: 'this-is-second-title',
        status: 'draft',
        image: "https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.png",
        description: "this is second description of map.......blah blah",
        created_at: '2021-12-20 18:00:00',
        updated_at: '2021-12-20 18:00:00',
        expire_date: '2021-12-20 18:00:00',
        questions: [{
            id: 1,
            type: 'select',
            question: 'What are you doing?',
            description: null,
            data: {
                options: [
                    { uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'USA' },
                    { uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'India' },
                    { uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'Japan' },
                    { uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'China' },
                ]
            }
        }],
    }

]

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN')
        },
        serveys: [...serveys]
    },
    getters: {},
    actions: {
        register({ commit }, user) {
            // return fetch(`http://localhost:8000/api/register`, {
            //     headers: {
            //         "Content-Type": "application/json",
            //         Accept: "application/json",
            //     },
            //     method: "POST",
            //     body: JSON.stringify(user),
            // })
            // .then((res) => res.json())
            // .then((res) => {
            //     commit("setUser", res);
            //     return res
            // })
            return axiosClient.post('/register', user)
            .then(({data}) => {
                commit("setUser", data);
                return data
            })
        },
        login({ commit }, user) {
            return axiosClient.post('/login', user)
            .then(({data}) => {
                commit("setUser", data);
                return data
            })
        },
        logout({ commit }) {
            return axiosClient.post('/logout').then( response => {
                commit('logout')
                return response;
            })
        }
    },
    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
            sessionStorage.removeItem('TOKEN')
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token)
        }
    },
    modules: {}
})

export default store;
