import * as actionTypes from 'src/actions/actionTypes';

const initialState = {
  data: [],
};

const resourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RESOURCE: {
      const { data } = action.payload;
      return {
        ...state,
        data,
      };
    }
    default: {
      return state;
    }
  }
};

export default resourceReducer;
