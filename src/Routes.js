import { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Calculadora from './components/Calculadora';
import Home from './components/Home';

class Routes extends Component {
    render(){
        return (
            <Switch>
            <Route path="/" component={Home} exact>
            </Route>

            <Route path="/calculadora" component={Calculadora} exact>
            </Route>
            
        </Switch>
        );
    }
}

export default Routes;