import { itemActionTypes } from '../actionTypes/item'

export const addItem = payload => ({
  type: itemActionTypes.ADD_ITEM_REQUEST,
  payload
})

export const addItemSuccess = payload => ({
  type: itemActionTypes.ADD_ITEM_SUCCESS,
  payload
})

export const addItemError = payload => ({
  type: itemActionTypes.ADD_ITEM_ERROR,
  payload
})

export const deleteItem = payload => ({
  type: itemActionTypes.DELETE_ITEM_REQUEST,
  payload
})

export const deleteItemSuccess = payload => ({
  type: itemActionTypes.DELETE_ITEM_SUCCESS,
  payload
})

export const deleteItemError = payload => ({
  type: itemActionTypes.DELETE_ITEM_ERROR,
  payload
})

export const updateItem = payload => ({
  type: itemActionTypes.UPDATE_ITEM_REQUEST,
  payload
})

export const updateItemSuccess = payload => ({
  type: itemActionTypes.UPDATE_ITEM_SUCCESS,
  payload
})

export const updateItemError = payload => ({
  type: itemActionTypes.UPDATE_ITEM_ERROR,
  payload
})

export const getItems = () => ({
  type: itemActionTypes.GET_ITEMS_REQUEST
})

export const getItemsSuccess = payload => ({
  type: itemActionTypes.GET_ITEMS_SUCCESS,
  payload
})

export const getItemsError = payload => ({
  type: itemActionTypes.GET_ITEMS_ERROR,
  payload
})