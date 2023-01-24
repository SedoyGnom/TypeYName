// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import markSlice from "./markSlice";

// const rootReducer = combineReducers({
//   mark: markSlice
// })

// export const store = configureStore({
//   reducer: rootReducer,
// })



import { configureStore } from "@reduxjs/toolkit";
import markReducer  from "./markSlice";
import sessionReducer from "./sessionSlice"

export default configureStore({
  reducer: {
    mark: markReducer,
    session: sessionReducer
  }
})
