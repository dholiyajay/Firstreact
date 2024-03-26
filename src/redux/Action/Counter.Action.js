import { INCREMENT__COUNTER, DICREMENT_COUNTER } from "../Reducer/Actiontype";

export const increamnet = () => (dispatch) => {
    dispatch({ type: INCREMENT__COUNTER })
}

export const decreament = () => (dispatch) => {
    dispatch({ type: DICREMENT_COUNTER })
}