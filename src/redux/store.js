import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import counterReducer from './actions/counter-reducer';

// const initialState = { 
//     counter: {
//         value: 0,
//         step: 5,
//     }
//  };

// const reducer = (state = initialState, { type, payload }) => {
//     switch(type) {
//         case 'counter/Increment':
//             return { 
//                 ...state,
//                 counter: {
//                     ...state.counter,
//                     value: state.counter.value + payload,
//                 }
//             };

//         case 'counter/Decrement':
//             return { 
//                 ...state,
//                 counter: {
//                     ...state.counter,
//                     value: state.counter.value - payload,
//                 }
//             };

//         default:
//             return state;
//     }
// }

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 

// const counterInitialState = {
//     value: 0,
//     step: 5,
// }

// const valueReducer = (state = counterInitialState.value, { type, payload }) => {
//     switch(type) {
//         case 'counter/Increment':
//             return state + payload;

//         case 'counter/Decrement':
//             return state - payload;

//         default:
//             return state;
//     }
// }

// const stepReducer = (state = counterInitialState.step, action ) => state;

// const counterReducer = combineReducers({
//     value: valueReducer,
//     step: stepReducer
// })

const rootReducer = combineReducers({
    counter: counterReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;
