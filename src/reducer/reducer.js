import { handleActions } from 'redux-actions'

const reducer = handleActions({
    'SET_PLATFORM_LOADING'(state) {
        return { ...state, platformLoading: true }
    },
    'CLICK_CITY'(state,action) {
        return { ...state, currentCity: action.payload}
    }
}, {})
  
export default reducer