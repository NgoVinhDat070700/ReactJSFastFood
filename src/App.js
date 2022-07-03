
import './App.css';
import axios from 'axios';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import ClientRouter from './ClientRouter';
import AdminRouter from './AdminRouter';
import { Provider } from 'react-redux';
import { store } from './redux/store';
axios.defaults.headers.common['token'] = 'Bearer '+ localStorage.getItem('token') 
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
function App() {
  const isAdmin = localStorage.getItem('isAdmin')
  return (
    <Provider store={store} >
    <div className="App">
      <Router>
        <Switch>
          {isAdmin?(<AdminRouter path="/admin" name="admin" />):<ClientRouter path="/" name="Home" />}
          <ClientRouter path="/" name="Home" />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
  </div>
  </Provider>
  )
}

export default App;
