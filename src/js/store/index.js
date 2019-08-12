// src/js/store/index.js
import { createStore } from "redux";
import rootReducer from "../reducers/index";
const store = createStore(rootReducer);
export default store;

console.log("!");

// console.log("!");
// console.log(store.getState());
//
// store.subscribe(() => console.log('Look ma, Redux!!'));
// console.log(store.getState());
//
// store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );
// console.log(store.getState());

