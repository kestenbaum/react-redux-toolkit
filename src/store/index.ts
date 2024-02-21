import {combineReducers, configureStore} from "@reduxjs/toolkit";
import postsReducer from "../store/reducers/PostsSlice"
import {postsAPI} from "../service/PostService";


const rootReducer = combineReducers({
    posts: postsReducer,
    [postsAPI.reducerPath]: postsAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];