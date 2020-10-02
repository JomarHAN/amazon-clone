export const initialState = {
    slideState: true,
    user: null,
    basket: []
}

export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0)
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
        case "REMOVE_FROM_BASKET":
            let newbasket = [...state.basket]
            const index = state.basket.findIndex(basketId => basketId.id === action.id)
            if (index >= 0) {
                newbasket.splice(index, 1)
            } else {
                console.warn(`Can not remove product (id: ${action.id}) as it's not in basket`)
            }
            return {
                ...state,
                basket: newbasket
            }
        default:
            return state
    }
}

export default reducer
