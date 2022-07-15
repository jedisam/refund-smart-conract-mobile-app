import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware  from 'redux-saga'
import { employees } from './reducers/reducers';
import empSaga from './saga/index'

const sagaMiddleware = createSagaMiddleware()


const reducers = {
  employees,
};

const withDevTools =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers(reducers);


const store = createStore(
    rootReducer,
  withDevTools(applyMiddleware(sagaMiddleware))
)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(empSaga)
export default store




