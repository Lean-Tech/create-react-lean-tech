import { all, call } from 'redux-saga/effects';
import itemSaga from './itemSaga'

export default function* rootSaga() {
    yield all([
        call(itemSaga)
    ]);
}
