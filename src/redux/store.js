import { applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();
export default function configureStore(init) {
    const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware));
     sagaMiddleware.run(saga)   
    return store;
}   