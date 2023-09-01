import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '../features/UserSlice'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { loderReducer } from '../features/LoderSlice';

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducer = combineReducers({
  user: userReducer,
  loder:loderReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;