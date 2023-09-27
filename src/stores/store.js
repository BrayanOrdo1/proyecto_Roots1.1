import { createStore } from 'vuex'

export default createStore({
    state: {
        isAuthentificated: false,
        userData: null
    },

    mutations:{
        SET_USER(state,user) {
            state.isAuthentificated=true;
            state.userData=user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        LOGOUT(state) {
            state.isAuthentificated=false;
            state.userData=null;
            localStorage.removeItem('user');
            localStorage.removeItem('userId');
        },
        limpiarCredenciales(state) {
            state.isAuthentificated=false;
            state.userData=null;
            localStorage.removeItem('user')
        },
        setUserAuthenticated(state,value) {
            state.isAuthentificated=value;
        }
    },

    actions: {
        setUser({commit },user) {
            commit('SET_USER', user);
        },
        logout({commit}) {
            commit('LOGOUT');
        },
        initializeStore({state}) {
            if (localStorage.getItem('user')) {
                state.userData=JSON.parse(localStorage.getItem('user'));
                state.isAuthentificated=true
            } else {
                state.userData=null;
                state.isAuthentificated=false                
            }
        }
    }
})