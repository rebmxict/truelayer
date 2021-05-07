import * as actionTypes from 'src/actions/actionTypes';

const initialState = {
  results: [],
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
    default: {
      return state;
    }
  }
};

export default resourceReducer;
