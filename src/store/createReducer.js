export default (initialState, handlers) => {

    return function reducer(state = initialState, action) {

        if ({}.hasOwnProperty.call(handlers, action.type)) {

            return handlers[action.type](state, action);

        }

        return state;
    };
}