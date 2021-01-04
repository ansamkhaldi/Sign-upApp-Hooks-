import './App.css';
import SignUp from './pages/SignUpAfter';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUpBefore from './pages/SignUpBefore';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <SignUpBefore />
          </Route>

          <Route path="/login">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
