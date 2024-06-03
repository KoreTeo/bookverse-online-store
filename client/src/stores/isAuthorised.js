import { defineStore } from 'pinia'

export const useAuthorizedStore = defineStore({
    id: 'authorization',
    state: () => ({
        isAuthorized: false
    }
    ),
    getters: {
        getIsAuthorized() {
            console.log('getting' + this.isAuthorized)
            if (localStorage.getItem('authToken')) {
                this.isAuthorized = true;
                return this.isAuthorized
            }
            return this.isAuthorized;
        }
    },
    actions: {
        unauthorize() {
            this.isAuthorized = false;
        },
        authorize() {
            this.isAuthorized = true;
        },
        checkAuthorize(){
            if (localStorage.getItem('authToken')) {
                this.isAuthorized = true;
            }
            else {
                this.isAuthorized = false;
            }
        }
    },
})