export const PERSIST_REHYDRATE = 'persist/REHYDRATE';

function persistStore(state, payload) {
    return Object.assign({}, state, payload);
}

const reducer = (state = {}, {type, payload = null}) => {
    if (type === PERSIST_REHYDRATE) {
        return persistStore(state, payload);
    } else {
        return state;
    }
};

export default reducer;
