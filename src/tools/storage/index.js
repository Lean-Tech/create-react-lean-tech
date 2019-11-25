export const loadStorage = (key = 'root-storage') => {
    try {
        const storage = localStorage.getItem(key);
        return storage === null ? undefined : JSON.parse(storage);
    } catch (error) {
        return undefined;
    }
};

export const saveStorage = (state, key = 'root-storage') => {
    try {
        const storage = JSON.stringify(state);
        localStorage.setItem(key, storage);
    } catch (error) {
        throw new Error(`fail save storage ${error}`);
    }
};

export const removeStorage = key => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        throw new Error(`fail remove storage ${error}`);
    }
};

export const clearStorage = () => {
    try {
        localStorage.clear();
    } catch (error) {
        throw new Error(`fail clear storage ${error}`);
    }
};

export const persistStorage = (store, whiteList = [], key = 'persist-store') => {
    try {

        if (!store.getState()) return new Error('store is not a object');

        let storage = null;
        const localStore = store.getState();

        if (whiteList.length) {
            whiteList.forEach(list => {
                if (localStore.hasOwnProperty(list)) {
                    storage = {
                        ...storage,
                        [list]: localStore[list]
                    }
                }
            });
        }
        localStorage.setItem(key, JSON.stringify(storage || localStore));
    } catch (error) {
        throw new Error(`fail save storage ${error}`);
    }
};
