import { useLocalStore } from 'mobx-react';

export type User = {
    firstName?: string
    lastName?: string
    bDate?: string
    id?: number
}

const initialState = {
    firstName: undefined, lastName: undefined, bDate: undefined, id: undefined
}

export type AuthStore = ReturnType<typeof useAuthStore>;
export const useAuthStore = (defaultUser: User = initialState) => {
    const store = useLocalStore(() => ({
        currentUser: defaultUser,

        setData(user: User) {
            store.currentUser = user
        },

        removeData() {
            store.currentUser = initialState
        },

        get info() {
            return store.currentUser
        },
    }));
    return store;
};