/**
ミドルウェア・ルーティング設定
**/

import React from 'react';
import
{
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import SearchPage from './SearchPage';
import About from './About';


const App =() => (
  <Router>
      <div className="app">
        <ul>
          <li><Link to="/">ホテル検索</Link></li>
          <li><Link to="/about">サービス概要</Link></li>
        </ul>
        <Switch>
         <Route exact path="/" component={SearchPage} />
         <Route  path="/about" component={About} />
        </Switch>
      </div>
  </Router>
);

export default App;
