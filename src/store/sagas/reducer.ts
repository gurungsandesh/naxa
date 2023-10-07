import { FETCH_DATA_SUCCESS } from "./action";

interface dataProps {
  data: any[];
}

const initialState: dataProps = {
  data: [],
};

const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
  }
};

export default dataReducer;
