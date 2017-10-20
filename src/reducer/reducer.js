import { handleActions } from 'redux-actions'

const reducer = handleActions({
    'SET_PLATFORM_LOADING'(state) {
        return { ...state, platformLoading: true }
    },
}, {})
  
export default reducer