import { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Calculadora from './components/Calculadora';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Faq from './components/Faq';
import Resultado from './components/Resultado';

class Routes extends Component {
    render(){
        return (
            <Switch>
            <Route path="/" component={Home} exact>
            </Route>

            <Route path="/calculadora" component={Calculadora} exact>
            </Route>

            <Route path="/sobre" component={Sobre} exact>
            </Route>

            <Route path="/faq" component={Faq} exact>
            </Route>

            <Route path="/resultado" component={Resultado} exact>
            </Route>
            
        </Switch>
        );
    }
}

export default Routes;