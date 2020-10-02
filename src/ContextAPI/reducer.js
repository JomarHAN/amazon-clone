export const initialState = {
    slideState: true
}

const reducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case "STOP_SLIDE":
            return {
                ...state,
                slideState: action.slideState
            }

        default:
            return state
    }
}

export default reducer
