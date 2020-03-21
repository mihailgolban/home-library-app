export const PERSIST_REHYDRATE = 'persist/REHYDRATE';

function persistStore(state, payload) {
    return Object.assign({}, state, payload);
}

const reducer = (state = {}, {type, payload = null}) => {
    switch (type) {
        case PERSIST_REHYDRATE:
            return persistStore(state, payload);
        default:
            return state;
    }
};

export default reducer;
