export const initialState = {
    slideState: true
}

export const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "STOP_SLIDE":
            return {
                ...state,
                slideState: action.type
            }

        default:
            return state
    }
}
