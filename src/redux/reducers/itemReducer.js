import { itemActionTypes } from '../actionTypes/item'

const initialState = {
  items: [],
  error: null,
  loading: false,
  success: false
};

export default function user(state = initialState, {type, payload}) {
  switch (type) {
    case itemActionTypes.ADD_ITEM_REQUEST:
    case itemActionTypes.DELETE_ITEM_REQUEST:
    case itemActionTypes.UPDATE_ITEM_REQUEST:
    case itemActionTypes.GET_ITEMS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case itemActionTypes.ADD_ITEM_ERROR:
    case itemActionTypes.DELETE_ITEM_ERROR:
    case itemActionTypes.UPDATE_ITEM_ERROR:
    case itemActionTypes.GET_ITEMS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    case itemActionTypes.ADD_ITEM_SUCCESS:
    case itemActionTypes.DELETE_ITEM_SUCCESS:
    case itemActionTypes.UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        success: !state.success,
        loading: false
      }
    case itemActionTypes.GET_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: [...payload]
      }
      default:
          return state;
  }
}