const cartReducer = (state = [], action) => {
    // console.log(state, action);
    const newState = [...state];
    switch (action.type) {
        case "ADD_TO_CART":
            return [
                ...state,
                {
                    id:action.id,
                    info: action.info,
                    quantity: 1
                }
            ]
        case "UPDATE_QUANTITY":
            const itemUpdate = newState.find(item => item.id === action.id);
            itemUpdate.quantity++;
            return newState;
        default:
            break;
    }
    return state
}
export default cartReducer