import { combineReducers } from "redux";
import counterTypes from './counter-types';

const counterInitialState = {
    value: 0,
    step: 5,
}

const valueReducer = (state = counterInitialState.value, { type, payload }) => {
    switch(type) {
        case counterTypes.INCREMENT:
            return state + payload;

        case counterTypes.DECREMENT:
            return state - payload;

        default:
            return state;
    }
}

const stepReducer = (state = counterInitialState.step, action ) => state;

export default combineReducers({
    value: valueReducer,
    step: stepReducer
})