import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import { persistStore } from "redux-persist";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer
})

const persistConfig = {
    key: 'contacts',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//         filter: filterReducer
//     }
// })

export let store = configureStore({
    reducer: persistedReducer
});

export let persistor = persistStore(store);