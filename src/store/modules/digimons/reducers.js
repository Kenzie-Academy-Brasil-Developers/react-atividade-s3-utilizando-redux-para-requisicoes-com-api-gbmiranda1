import { ADD_DIGIMONS } from "./actionTypes";

const digimonsReducer = (state = [], action) =>{
    console.log(state)
    switch (action.type) {
        case ADD_DIGIMONS:
            const {digimon} = action
            return [digimon];
        default:
            return state;
    }
}

export default digimonsReducer;