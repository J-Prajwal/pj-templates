import * as types from "./app.actionTypes";

const init = {
  isLoading: false,
  isError: false,
  appData: [],
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case types.FETCH_DATA_LOADING: {
      return { ...state, isLoading: true };
    }
    case types.FETCH_DATA_SUCCESS: {
      return { ...state, isLoading: false, appData: payload, isError: false };
    }
    case types.FETCH_DATA_FAILURE: {
      return { ...state, isError: false };
    }
    default:
      return state;
  }
};
