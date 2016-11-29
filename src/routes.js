import React from 'react';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import App from './App';
import Home from './Home/index';
import Blog from './Blog/index';
import About from './About/index';
import Work from './Work/index';


class Routers extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={Home} />
          <Route path="about" component={About} />
          <Route path="blog" component={Blog} />
          <Route path="work" component={Work} />
        </Route>
      </Router>
    )
  }
}

export default Routers;
