export const initialState = {
    slideState: true,
    user: null,
    basket: []
}

const reducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case "STOP_SLIDE":
            return {
                ...state,
                slideState: action.slideState
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        default:
            return state
    }
}

export default reducer
