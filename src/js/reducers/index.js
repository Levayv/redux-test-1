// src/js/reducers/index.js

// const initialState = {
//     articles: []
// };
// function rootReducer(state = initialState, action) {
//     return state;
// }
// export default rootReducer;

import { ADD_ARTICLE } from "../constants/action-types";
const initialState = {
    articles: []
};
function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    return state;
}
export default rootReducer;