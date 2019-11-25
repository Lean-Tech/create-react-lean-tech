import { call, takeEvery, put, all} from 'redux-saga/effects'
import { itemActionTypes } from '../actionTypes/item'
import * as itemActions from '../actions/item'
import API from '../../API'

function* addItem({payload}) {
  try {
    const response = yield call(API.itemService.add, payload)
    yield put (itemActions.addItemSuccess(response.data))
  } catch (error) {
    yield put (itemActions.addItemError(error))
  }
}

function* addItemLoading() {
  yield takeEvery (itemActionTypes.ADD_ITEM_REQUEST, addItem)
}

function* deleteItem({payload}) {
  try {
    const response = yield call(API.itemService.delete, payload)
    yield put (itemActions.deleteItemSuccess(response.data))
  } catch (error) {
    yield put (itemActions.deleteItemError(error))
  }
}

function* deleteItemLoading() {
  yield takeEvery (itemActionTypes.DELETE_ITEM_REQUEST, deleteItem)
}

function* updateItem({payload}) {
  try {
    const response = yield call(API.itemService.update, payload)
    yield put (itemActions.updateItemSuccess(response.data))
  } catch (error) {
    yield put (itemActions.updateItemError(error))
  }
}

function* updateItemLoading() {
  yield takeEvery (itemActionTypes.UPDATE_ITEM_REQUEST, updateItem)
}

function* getItems() {
  try {
    const response = yield call(API.itemService.get)
    yield put (itemActions.getItemsSuccess(response.data))
  } catch (error) {
    yield put (itemActions.getItemsError(error))
  }
}

function* getItemsLoading() {
  yield takeEvery (itemActionTypes.GET_ITEMS_REQUEST, getItems)
}

export default function* itemSaga() {
  yield all([
    call(addItemLoading),
    call(deleteItemLoading),
    call(updateItemLoading),
    call(getItemsLoading)
  ])
}
