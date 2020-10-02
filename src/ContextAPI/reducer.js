export const initialState = {
    slideState: true,
    user: null
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

        default:
            return state
    }
}

export default reducer
