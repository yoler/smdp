// import { takeEvery, call } from 'redux-saga/effects'

// function* clickCity(action) {
//     yield call(console.log(action.payload))
// }

export function* saga() {
    yield* [
        // takeEvery('CLICK_CITY',clickCity)
    ]
}