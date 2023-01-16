const initialState = {
  num1: 0,
  num2: 0,
  result: 0,
  nb_operation: 0,
  operation_type : "",

};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {...state ,result:state.num1+state.num2, nb_operation:state.nb_operation+1, operation_type:state.operation_type="+"};
    case 'SUBTRACT':
      return {...state , result:state.num1-state.num2, nb_operation:state.nb_operation+1, operation_type:state.operation_type="-"};
    case 'MULTIPLY':
      return {...state , result:state.num1*state.num2, nb_operation:state.nb_operation+1, operation_type:state.operation_type="*"};
    case 'DIVIDE':
      return { ...state ,result:state.num1/state.num2, nb_operation:state.nb_operation+1, operation_type:state.operation_type="/"};
    default:
      return state;
  }
};

export default reducer;