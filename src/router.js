import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Index from './App';
import { Provider } from 'react-redux';
import configureStore from './redux/store'
let store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default class Navrouter extends Component {
    render() {
        return (
            <Provider store={store}>
                    <Router>
                        <div>
                            <Switch> {/*职匹配一次*/}
                                <Route exact path="/" component={Index} />
                    

                            </Switch>
                        </div>
                    </Router>
            </Provider>
        )
    }
}