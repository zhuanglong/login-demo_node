import { HashRouter as Router, Switch, Redirect, Route }  from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

// 路由验证
const PrivateRoute = ({ component: Component, ...rest }) => {
  // 存在 token 表示已登录
  const isLogined = !!window.localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={(props) => (
        isLogined ?
          <Component {...props} />
          :
          <Redirect to="/sign-in" />
      )}
    />
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/About" component={About} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
