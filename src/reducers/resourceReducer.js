import * as actionTypes from 'src/actions/actionTypes';

const initialState = {
  results: [],
  loading: false,
};

const resourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ACCESS_TOKEN: {
      const { accessToken } = action.payload;
      return {
        ...state,
        accessToken,
      };
    }
    case actionTypes.SET_RESULT: {
      const results = action.payload;
      return {
        ...state,
        results,
      };
    }
    case actionTypes.SET_LOADER: {
      const loading = action.payload;
      return {
        ...state,
        loading,
      };
    }
    default: {
      return state;
    }
  }
};

export default resourceReducer;
