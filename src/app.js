import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';



class App extends React.Component{
    render(){
        return (
            <div className="ui container">
                hello
            </div>
        )
    }
}
class Bpp extends React.Component{
    render(){
        return (
            <div className="ui container">
                Bbbb
            </div>
            
        )
    }
}

class Cpp extends React.Component{
    render(){
        return (
            <div className="ui container">
                Cppdfa
            </div>
            
        )
    }
}


ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/app" component={Bpp} />
            <Route path="/cpp" component={Cpp} />
        </div>
        
    </Router>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
