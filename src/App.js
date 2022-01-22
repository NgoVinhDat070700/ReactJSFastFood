import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import ClientRouter from './ClientRouter';
import AdminRouter from './AdminRouter';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <AdminRouter path="/admin" name="admin" />  
          <ClientRouter path="/" name="Home" />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

        </Switch>
      </Router>
  </div>
  )
}

export default App;
